// const { vendorValidate} = require('..helpers/validateSchema')
const db = require('../models/indexStart')
const createError = require('http-errors')
// const { response } = require('express')

//use the model
const Student = db.student

module.exports={

    //add student
    addStudent :async(req,res,next)=>{

        try{
            //const validationResult = vendorvalidate.validateAssync(req.body);
            // if (validationResult.error){
            //     if validation FinalizationRegistry,send an error response
            //     return res.status(400).json({error:validationResult.error.details[0].message})
            // }
            // if validation passes add a new vendor
            let info = {
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                gender:req.body.gender
            }
            const addStudent = await Student.create(info)
            res.status(200).send(addStudent)
        }catch(error){
            next(error)
        }
    }
}