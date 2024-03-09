
import { json } from "express";
import Task from "../models/task.model.js";

export const getTasks = async (req, res) =>{

    const tasks = await Task.find()
    res.json(tasks)
};

export const createTask = async (req, res) =>{
    const {fechaRuta, puntoSalida, geosalida, puntoLlegada,  geollegada, tiempoEstimado, estado, medioTransporte} = req.body;
   

    console.log(req.user)

    const newTask = new Task({
        fechaRuta,
        puntoSalida,
        puntoLlegada,
        geosalida,
        geollegada,
        tiempoEstimado,
        estado,
        medioTransporte,
        user:req.user.id
               
    });

    
};

export const getTask = async (req, res) =>{

   const task = await Task.findById(req.params.id)
   if(!task) return res.status(404).json({message: 'Task not found'})
   res.json(task) 
};

export const deleteTask = async (req, res) =>{
  
    const task = await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message: 'Task not found'})
    res.json(task) 

};

export const updateTask = async (req, res) =>{

    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!task) return res.status(404).json({message: 'Task not found'})
    res.json(task) 

};
