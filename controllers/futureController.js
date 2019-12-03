const FutureTrip = require('../models/FutureTrip.js');
const{validationResult} = require('express-validator');

exports.getFutureTrips = (req,res, next)=>{

     FutureTrip.find().exec()
     .then(results=>{
          res.send(results);
     })
     .catch(error=>next(error)); 
}

exports.getTrip = (req,res, next)=>{
     FutureTrip.find({'location':req.params.name}).exec()
     .then(results=>{
          res.send(results);
     })
     .catch(error=>next(error));
}

exports.postFutureTrips = (req,res,next)=>{

     const valErrors = validationResult(req).array();
     if(valErrors.length !=0 ){
        res.status(422).send(valErrors);  
     }
     else{
          let newTrip = new FutureTrip(req.body);
          newTrip.save()
          .then(()=>{
               res.status(201).send(newTrip);
          })
          .catch(error=>next(error));
     }
}

