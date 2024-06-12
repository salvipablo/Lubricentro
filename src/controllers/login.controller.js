import { UserSchema } from "../models/user.js";

export const Login = async (req, res) => {
  try {
    const { username, password  } = req.body

    const foundUser = await UserSchema.findOne({ where: { username: username } })

    if (!foundUser) throw new Error('User not found')

    if (password !== foundUser.password) throw new Error('Invalid data entered')

    res.status(200).json({ message: 'Accepted user' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const SaveUser = async(req, res) => {
  try {
    const { username, password } = req.body

    let newUser = {
      username, 
      password
    }

    UserSchema.create(newUser)

    res.status(201).json({ message: 'User successfully added' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const GetUsers = async (_req, res) => {
  try {
    const users = await UserSchema.findAll()

    res.status(201).json({ users })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
