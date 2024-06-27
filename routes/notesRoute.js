import express from 'express'
import notesController from '../controllers/notesController.js';

const router = express.Router();

router.post('/create',notesController.notesCreation)
router.post('/update/:id',notesController.notesUpdate)
router.get('/delete/:id',notesController.notesDelete)
router.get('/',notesController.notesCreationDisplayPage)
router.get('/update/:id',notesController.editPage)

export default router