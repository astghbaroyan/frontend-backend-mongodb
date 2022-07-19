import express from 'express';
const contactRouter = express.Router();
import contactControllers from '../controllers/contacts-controller.js';

contactRouter.get('/contacts', contactControllers.getContactsController);
contactRouter.post('/contacts',  contactControllers.postContactsController);
contactRouter.delete('/contacts', contactControllers.deleteContactsController);
contactRouter.put('/contacts', contactControllers.putContactsController);

export default contactRouter;