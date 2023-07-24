const Work = require('../models/work');
module.exports.create = async function (req, res) {


//handling the error using centralize approach 
    try {

        if (req.body.info == '' || req.body.category == '' || req.body.date == '') {
            //avoiding to store empty fields in the data base
            console.log('return to home page null value given')
            return res.redirect('/');
        }
        let work = await Work.create(req.body);//creating a work 

        if (req.xhr) {
            console.log('yes this is xhr request');
            return res.status(200).json({
                work: work,   //sending the work info to the ajax request in th javascript file
                message: 'you recieve the workid'



            })
        }

    } catch (err) {
        console.log('error is acured in create work', err);
        req.redirect('/');

    }






}

module.exports.delete = async function (req, res) {

    console.log("come into delete function", req.body.check);


    if (req.body.check == null) {
        //handling the event when delete request will null
        return res.redirect('/');
    }


    try {


        if (req.xhr) {
            if (typeof (req.body.check) == 'string') {
                let work = await Work.findById(req.body.check)
                work.remove();//deleting the particular work by its id from the work collection
                return res.status(200).json({
                    work: work._id,//sending the deleted work id for DOM manipulation
                    message: 'you get the deleted id'
                });
            }
            else {
                for (var id of req.body.check) {
                    let work = await Work.findById(id)
                    work.remove();
                }
                console.log('checking the delete all', req.body.check)
                return res.status(200).json({
                    work: req.body.check,//sending all the id of work which should be deleted from the dom
                    message: 'you get all the deleted id'
                });

            }


        }
      }  catch (error)
     {
            console.log(error);
            req.redirect('/');
        }

}