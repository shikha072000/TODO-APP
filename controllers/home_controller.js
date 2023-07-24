const Work=require('../models/work');
module.exports.home= async function(req,res){


   try {
      let work=await Work.find({}).sort({'createdAt':-1});//finding all works and sorting each work according to the createAT field
    return  res.render('home',{
         title:'TODO',
         works:work//passing the all work to the ejs file for view
        })
      
   } catch (error) {
      console.log(error);
      res.redirect('/')
   }
     

   
}