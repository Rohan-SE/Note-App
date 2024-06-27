import notes from "../models/notesSchema.js";

const notesCreation = async(req,res)=>{
    try {
        const {content} = req.body
        if(!content){
            return res.status(500);
        }else{
            const noteObj = new notes({
                content
            })
            await noteObj.save()
            return res.redirect('/')
        }
    } catch (error) {
        console.log(error)
    }
}

const notesUpdate = async(req,res)=>{
    try {
        const id = req.params.id
    const {content} = req.body
    await notes.findOneAndUpdate({_id:id},{content})

    return res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

const notesDelete = async(req,res)=>{
    try {
        const id = req.params.id
        await notes.findOneAndDelete({_id:id})
        return res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

const notesCreationDisplayPage = async(req,res)=>{
    const allNotes = await notes.find()
    res.render('index',{allNotes})
}

const editPage = async(req,res)=>{
    const id = req.params.id
    const note = await notes.findOne({_id:id})
    res.render('edit',{note});
}

const notesController = {notesCreation,notesUpdate,notesDelete,notesCreationDisplayPage,editPage}

export default notesController