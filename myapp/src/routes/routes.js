import { Router } from "express";
import { getPersonas, createNewPersona, getPersonById, deletePersonaById, updatePersona } from '../controllers/persona.controller'

const routes = Router()

routes.get('/getPersonas', getPersonas);

routes.post('/createNewPersona', createNewPersona);

routes.get('/getPersonaById/:pers_persona', getPersonById);

routes.delete('/deletePersonaById/:pers_persona', deletePersonaById);

routes.put('/updatePersona', updatePersona);

export default routes