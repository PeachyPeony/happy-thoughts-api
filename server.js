import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Thought from './models/thought.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error))

app.get('/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find()
            .sort({ createdAt: 'desc' })
            .limit(20)

        res.json(thoughts)
    } catch (error) {
        res.status(500).json({ error: 'Could not retrieve thoughts' })
    }
})

app.post('/thoughts', async (req, res) => {
    try {
        const { message } = req.body

        const newThought = new Thought({
            message
        })

        await newThought.save()

        res.status(201).json(newThought)
    } catch (error) {
        res.status(400).json({ error: 'Could not create thought' })
    }
})


app.post('/thoughts/:thoughtId/like', async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(
            req.params.thoughtId,
            { $inc: { hearts: 1 } },
            { new: true }
        )

        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' })
        }

        res.json(thought)
    } catch (error) {
        res.status(400).json({ error: 'Could not like thought' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})