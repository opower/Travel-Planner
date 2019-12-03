const PastTrip = require('../models/PastTrip.js');
const{validationResult} = require('express-validator');

exports.getTrips = (req,res, next)=>{
     PastTrip.find().exec()
     .then(results=>{
          res.send(results);
     })
     .catch(error=>next(error));
}

exports.getTrip = (req,res, next)=>{
     PastTrip.find({'location':req.params.name}).exec()
     .then(results=>{
          res.send(results);
     })
     .catch(error=>next(error));
}

exports.postTrips = (req,res,next)=>{
     
     const valErrors = validationResult(req).array();
     if(valErrors.length !=0 ){
        res.status(422).send(valErrors);  
     }
     else{
          let newTrip = new PastTrip(req.body);
          newTrip.save()
          .then(()=>{
               res.status(201).send(newTrip);
          })
          .catch(error=>next(error));
     }
}
