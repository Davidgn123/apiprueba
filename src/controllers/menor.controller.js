import Menor from "../models/menor.model.js";


export const getMenores = async (req, res) => {
    const menores = await Menor.find()
    res.json(menores)
};

export const createMenor = async (req, res) => {

   const { nombres, apellidos, tipoIdentificacion, numeroIdentificacion, edad, telefono, correo } = req.body

   const newMenor = new Menor({

    nombres,
    apellidos,
    tipoIdentificacion,
    numeroIdentificacion,
    edad,
    telefono,
    correo
   });
   const savedMenor = await newMenor.save();
   res.json(savedMenor);
    
};

export const getMenor = async (req, res) => {

    const menor = await Menor.findById(req.params.id)
    if (!menor) return res.status(404).json ({ message: 'Menor no encontrado'})
    res.json(menor)

};

export const updateMenor = async (req, res) => { 

    try {
        const { id } = req.params;
        const updateData = req.body; // Datos para actualizar el menor

        const menor = await Menor.findByIdAndUpdate(id, updateData, { new: true }); 
        if (!menor) {
            return res.status(404).json({ message: 'Menor no encontrado' });
        }

        res.json(menor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 };

export const deleteMenor = async (req, res) => {

    try {
        const menor = await Menor.findByIdAndDelete(req.params.id);
        if (!menor) {
            return res.status(404).json({ message: 'Menor no encontrado' });
        }
        res.json({ message: 'Menor eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};
