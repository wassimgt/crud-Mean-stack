 const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/crudmean', (err)=>{
     if(!err)
     console.log("mongodb connection succeeded...");
     else
     console.log("erreur in db connection "+ JSON.stringify(err,undefined,2));
 });
 module.exports=mongoose;