import mongoose from 'mongoose'

const notesSchema = mongoose.Schema({
    content:String
})

const notes = mongoose.model('note',notesSchema,'notes')

export default notes