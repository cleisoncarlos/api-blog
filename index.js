import express from 'express'
import cors from 'cors'
import winston from 'winston'

import authenticateToken from './middlewares/authMiddleware.js'

import dotenv from 'dotenv';
dotenv.config();


import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import categoryRouter from './routes/category.route.js'
import loginRouter from './routes/auth.route.js'



const {combine, timestamp, label, printf } = winston.format

const myFormat = printf(({level, message, label, timestamp})=> {
    return `${timestamp} [${label}] ${level}: ${message}`
})

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new(winston.transports.Console)(),
        new (winston.transports.File)({filename: 'logs/logs.log' })
    ],
    format: combine(
        label({label: 'blog-api'}),
        timestamp(),
        myFormat
    )
})

const app = express()
app.use(express.json())
app.use(cors())


// rotas=========================
app.use('/user', authenticateToken, userRouter)
app.use('/post', authenticateToken, postRouter)
app.use('/category', authenticateToken, categoryRouter)
app.use('/login', loginRouter)


// middleware de erros para salvar no logger
app.use((err, req, res, next) => {
    logger.error(`Erro: ${req.method} ${err.baseUrl} - ${err.message}`)
    res.status(400).send({error: err.message})
})


app.listen(process.env.PORT, () => {
   logger.info(`API iniciou na porta ${process.env.PORT}`)
  
})