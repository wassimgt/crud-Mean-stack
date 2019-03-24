const express = require('express');
var router = express.Router();
var { employee }= require('../model/employee.js');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/:id',(req,res) => {
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`No record with given id : ${req.params.id} `);
employee.findById(req.params.id,(err,docs)=>{
    if(!err){ 
            
        res.send(docs);
    }
    else{
        console.log("error in retriving employee:"+JSON.stringify(err,undefined , 2));
    }
});
});

// =>localhost:3000/employees/
router.get('/',(req,res) => {
    employee.find((err,docs) => {
        if(!err){ 
            
            res.send(docs);
        }
        else{
            console.log("error in retriving:"+JSON.stringify(err,undefined , 2));
        }
    }
    
    );
});
router.post('/',(req,res)=>{
var emp=  new employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salaire: req.body.salaire,

});
emp.save((err,docs) => {
        if(!err){ 
            
            res.send(docs);
        }
        else{
            console.log("error in employee save:"+JSON.stringify(err,undefined , 2));}
        });

});
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`No record with given id : ${req.params.id} `);

var emp= {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salaire: req.body.salaire,

};
employee.findByIdAndUpdate(req.params.id,{$set:emp},{new:true},(err,docs) => {
    if(!err){ 
        
        res.send(docs);
    }
    else{
        console.log("error in employee update:"+JSON.stringify(err,undefined , 2));}
    });

});
router.delete('/:id',(req,res)=> {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id} `);
employee.findByIdAndRemove(req.params.id,(err,docs) => {
    if(!err){ 
        
        res.send(docs);
    }
    else{
        console.log("error in employee update:"+JSON.stringify(err,undefined , 2));}
    });
});


module.exports=router;