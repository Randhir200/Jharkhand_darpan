const Tour = require("../../model/tours/tours")

exports.getTours = async (req,res)=>{
   const data = await Tour.find();
   res.status(200).json({
    status:"Success",
    data,
   })
}

exports.createTour = async (req, res)=>{
    const body = req.body;
    const tour = await new Tour(body);
    tour.save((err)=>{
        if(err){
            res.status(400).json({
                status:400,
                message:"Failed to create"
            })
        }

        res.status(200).json({
            status:200,
            message:"successfully ceated!"
        })
    })
}