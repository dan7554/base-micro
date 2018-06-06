import express from 'express';
import UserController from '../controllers/UserController'; 

let router = express.Router();

router.post('/login',  UserController.login );

module.exports = router;
