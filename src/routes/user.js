import express from 'express';
import UserController from '../controllers/UserController'; 

let router = express.Router();

router.get('/login',  UserController.login );

module.exports = router;
