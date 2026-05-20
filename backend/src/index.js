import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import authRoutes from './Routes/auth.routes.js'
import etudiantRoutes from './Routes/etudiant.routes.js'
import formationRoutes from './Routes/formation.routes.js'

const app = express()

app.use(cors({
    origin: 'http://localhost:5173', // Ajustez selon l'URL de votre frontend
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))

const port = process.env.PORT || 3000

app.use('/auth', authRoutes)
app.use('/etudiant', etudiantRoutes)
app.use('/formation', formationRoutes)

app.listen(port, () => {
    console.log(`Le serveur est lancé sur http://localhost:${port}/`)
})
