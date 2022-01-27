import express from 'express'
import { register } from '../controllers/Auth'

const router = express.Router()

router.post('/register', register)

module.exports = router
