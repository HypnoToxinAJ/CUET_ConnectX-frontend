import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

// Demo user data
const DEMO_USER = {
  fullName: 'Md Abu Sayed',
  studentId: '2204115',
  email: 'u2204115@student.cuet.ac.bd',
  password: 'demo1234',
  userType: 'current student',
  batch: 2022,
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [registeredUsers, setRegisteredUsers] = useState([])

  useEffect(() => {
    // Load current user
    const savedUser = localStorage.getItem('currentUser')
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (savedUser && loggedIn) {
      setUser(JSON.parse(savedUser))
      setIsLoggedIn(true)
    }
    
    // Load registered users from localStorage
    const savedUsers = localStorage.getItem('registeredUsers')
    if (savedUsers) {
      setRegisteredUsers(JSON.parse(savedUsers))
    } else {
      // Initialize with demo user
      const initialUsers = [DEMO_USER]
      localStorage.setItem('registeredUsers', JSON.stringify(initialUsers))
      setRegisteredUsers(initialUsers)
    }
  }, [])

  // Register a new user
  const register = (userData) => {
    // Check if user already exists
    const existingUser = registeredUsers.find(u => u.studentId === userData.studentId)
    if (existingUser) {
      return { success: false, error: 'Student ID already registered' }
    }
    
    const emailExists = registeredUsers.find(u => u.email === userData.email)
    if (emailExists) {
      return { success: false, error: 'Email already registered' }
    }
    
    // Add new user
    const newUsers = [...registeredUsers, userData]
    localStorage.setItem('registeredUsers', JSON.stringify(newUsers))
    setRegisteredUsers(newUsers)
    
    // Auto-login after registration
    const { password, ...userWithoutPassword } = userData
    localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
    localStorage.setItem('isLoggedIn', 'true')
    setUser(userWithoutPassword)
    setIsLoggedIn(true)
    
    return { success: true }
  }

  // Login with credentials
  const login = (studentId, password) => {
    const foundUser = registeredUsers.find(u => u.studentId === studentId && u.password === password)
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser
      localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword))
      localStorage.setItem('isLoggedIn', 'true')
      setUser(userWithoutPassword)
      setIsLoggedIn(true)
      return { success: true }
    }
    return { success: false, error: 'Invalid Student ID or password' }
  }

  // Update user profile
  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData }
    localStorage.setItem('currentUser', JSON.stringify(updatedUser))
    setUser(updatedUser)
    
    // Also update in registered users
    const updatedUsers = registeredUsers.map(u => 
      u.studentId === user.studentId ? { ...u, ...updatedData } : u
    )
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers))
    setRegisteredUsers(updatedUsers)
  }

  const logout = () => {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('isLoggedIn')
    setUser(null)
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, register, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
