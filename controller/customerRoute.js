const express = require("express");
const customerSchema = require("../model/customerSchema")
const mongoose = require("mongoose");
const customerRoute = express.Router();


customerRoute.post("/create-customer",(req,res)=>{
    customerSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else{
            res.json(data)
        }
    })
})


customerRoute.get("/",(req,res)=>{
    customerSchema.find((err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})


customerRoute.route("/update-customer/:id")
.get((req,res)=>{
    customerSchema.findById
(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err
        else
            res.json(data)
    })
})


.put((req,res)=>{
    customerSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
        {$set:req.body},
        (err,data)=>{
            if(err)
                return err
            else
                res.json(data)
    })
})

customerRoute.delete("/delete-customer/:id",(req,res)=>{
    customerSchema.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id),
        (err,data)=>{
            if(err)
                return err
            else
                res.json(data)
        }
    )
})
// student.Route.get("/update-student/:id")
// student.Route.put("/update-student/:id")
// localhost:4000/studentRoute/


module.exports = customerRoute;
