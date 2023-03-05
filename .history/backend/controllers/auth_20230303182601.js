require("dotenv").config();
const pool = require('../db');
const { hash } = require('bcryptjs')
const { sign } = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const jwt_decode = require('jwt-decode');



 exports.getUsers = async (req, res) => {
  try {
    const { rows } = await pool .query('select * from users; ')

    return res.status(200).json({
      success: true,
      users: rows
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.register = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const hashedPassword = await hash(password, 10)

    await pool .query('insert into users(name, email, password) values ($1 , $2, $3)', [
      name,
      email,
      hashedPassword,
    ])


    return res.status(201).json({
      success: true,
      message: 'The registraion was successfull',
      name: name,


    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.login = async (req, res) => {
  let user = req.user

  let payload = {
    id: user.user_id,
    name: user.name,
    email: user.email,
    is_admin: user.is_admin,


  }

  try {
    const access_token = await sign(payload, SECRET, { expiresIn: '30d' })
    console.log(access_token)
    const decoded = jwt_decode(access_token);
    return res.status(200).cookie('access_token', access_token, { httpOnly: true }).json({
      user:decoded,
      success: true,
      message: 'Logged in successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

exports.protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: 'Protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

exports.logout = async (req, res) => {
  try {
    return res.status(200).clearCookie('access_token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({
      error: error.message,
    })
  }
}

