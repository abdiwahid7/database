const express = require('express')
const routes = express.Router()
const studentController = require('../controllers/studentController')
// const authController = require('../helpers/jwtHelpers')
// const multer = require('multer')
// const upload = multer({ dest: 'public/images/' })
// const router = express.Router()
// router.use(express.json())
// router.use(express.urlencoded({ extended: true }));
// router.use(express.static('public'));
// router.use(express.json());
// const {verifyAccessToken}= require('../helpers/jwtHelpers')

router.post('/addStudent' , studentController.addStudent)
// router.get('allStudents')
// router.get('/student/:id')
// router.patch('updateStudent/:id')


module.exports = router