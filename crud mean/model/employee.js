const mongosse = require('mongoose');
var employee= mongosse.model('employee',{
name: {type :String },
position: {type:String},
office: {type:String},
salaire: {type:Number}

});
module.exports={ employee } ;