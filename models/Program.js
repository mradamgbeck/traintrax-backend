const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProgramSchema = new Schema({
    title: {
        type: String,
        required: true,
    }
})

module.exports = Program = mongoose.model('program', ProgramSchema)