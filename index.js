const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const QuestionModel = require('./model/Questions')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.get('/getQuestions', (req, res) => {
    QuestionModel.find()
    .then(questions => res.json(questions.at(0).questions))
    .catch(err => res.json(err))
})

app.listen(process.env.PORT, () => {
    console.log(`ვუსმენ ${process.env.PORT} პორტს`)
})
