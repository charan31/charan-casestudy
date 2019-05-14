import { Router } from 'express';
import usersService from '../services/users.service'
import { parse } from 'json2csv'
import { Log } from '../services'
import Joi from 'joi';

const router = new Router();

//Declaring JOI - Object Schema Validation 
const joi_pagenumber = Joi.object({
  page: Joi.number().integer().min(1).required()
});

router.get('/api/csv_file', async (req, res) => {

  const validation = Joi.validate(req.query, joi_pagenumber);
  if (validation.error) {
    //if payload is invalid, return 422 error to user
    Log.info('Invalid Query Received');
    return res.boom.badData(validation.error);
  }
  const pageNumber = req.query.page

  try {
    const userservice = new usersService()
    const users = await userservice.getUsers(pageNumber)
    if(!users) {
      return res.boom.badRequest('Users List is Empty.')
    }

    const csvdata = parse(users.data)
    res.setHeader('Content-disposition', 'attachment; filename=userslist.csv');
    res.set('Content-Type', 'text/csv');
    res.status(200).send(csvdata);
  } catch (error) {
    Log.info('Third Party Server unavailable. error occured', error);
    return res.boom.serverUnavailable('Server unavailable. try again some time.')
  }

});

module.exports = router;

