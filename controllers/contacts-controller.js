import Contact from '../schemas/contacts.js';

async function getContactsController(req,res) {
    const contacts = await Contact.find();

    return res
    .send ({
        data: contacts,
    });
}

async function postContactsController(req,res) {
    const contactBody = req.body;
    const saveData = await Contact.create(contactBody);
    
    return res
    .status(201)
    .send ({
        data: saveData
    });
}

async function deleteContactsController(req,res) {
    const requestQuery = req.query;
    console.log('requestQuery', requestQuery);

    const result = await Contact.deleteOne({
        _id: requestQuery._id
    });
    
    console.log('result', result);

    if (result.deletedCount === 0) {
      return res
    .status(404)
    .send ({ message: 'contact not found' });  
    }

    return res
    .status(204)
    .send();
    
}

async function putContactsController(req,res) {
    const requestQuery = req.query;
    const requestBody = req.body;

    console.log('requestQuery', requestQuery);

    const result = await Contact.updateOne(
        {_id: requestQuery._id},
        {title: requestBody.title}
    );
    
    console.log('result', result);

    if (result.isModified === 0) {
      return res
    .status(404)
    .send ({ message: 'contact not found' });  
    }

    return res
    .status(201)
    .send({ message: 'Data was modified'});
    
}

export default {
    getContactsController,
    postContactsController,
    deleteContactsController,
    putContactsController,
}