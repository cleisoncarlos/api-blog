import express from 'express'
import cors from 'cors'
import winston from 'winston'

import dotenv from 'dotenv';
dotenv.config();

import authenticateToken from './middlewares/authMiddleware.js'
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
app.use(cors())
//  app.use(cors({ 
//      origin: 'http://localhost:3000'    
//       }));
app.use(express.json())

// middleware para servir arquivos estáticos
app.use(express.static('public'));

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