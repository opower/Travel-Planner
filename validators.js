const {check} = require("express-validator");

// const validateDate = (date)=>{
//     let curr = new Date();
//     let year = curr.getYear();
//     let month = curr.getMonth();
//     let day = curr.getDay(); 
    
// };


exports.pastValidator = [
    check('location', 'Please Enter a Location')
    .trim()
    .not().isEmpty()
    .isLength({min:1, max:30})
    .escape()
    
    ,
    
    check('date', 'Please Enter a Valid Date')
    .trim()
    .not().isEmpty()
    .escape()
    
     ,
    
     check('duration', 'Please Enter the Duration of the Trip')
    .trim()
    .not().isEmpty()
    .escape()

];

    exports.futureValidator = [
    check('location', 'Please Enter a Location')
    .trim()
    .not().isEmpty()
    .isLength({min:1, max:30})
    .escape()
    
    ,
    
    check('date', 'Please Enter a Valid Date')
    .trim()
    .not().isEmpty()
    .escape()
    
     ,
    
     check('duration', 'Please Enter the Duration of the Trip')
    .trim()
    .not().isEmpty()
    .escape()

];
