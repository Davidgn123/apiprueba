

import Publicacion from "../models/publicacion.js";
import Menor from '../models/menor.model.js';

//////////////////////////////////////////////


export const crearPublicacion = async (req, res) => {
  try {
      const { menor, fechaPublicacion, foto, numeroContacto, ultimaVezVistoen,UltimaVestimenta } = req.body;

      // Verifica si el ID del menor está presente en la solicitud
      if (!menor) {
          return res.status(400).json({ mensaje: 'El ID del menor es requerido.' });
      }

      // Verifica si el menor existe en la base de datos
      const existeMenor = await Menor.findById(menor);
      if (!existeMenor) {
          return res.status(404).json({ mensaje: 'El menor no existe.' });
      }

      // Crea una nueva instancia de Publicacion
      const nuevaPublicacion = new Publicacion({
          menor,
          fechaPublicacion: fechaPublicacion || Date.now(),
          foto,
          numeroContacto,
          UltimaVestimenta,
          ultimaVezVistoen

      });

      // Guarda la nueva publicación en la base de datos
      const resultado = await nuevaPublicacion.save();

      // Carga la información del menor asociado a la publicación
      const publicacionConMenor = await Publicacion.findById(resultado._id).populate('menor');

      // Retorna la publicación creada con la información del menor
      res.status(201).json(publicacionConMenor);
  } catch (error) {
      res.status(400).json({ mensaje: error.message });
  }
};

/////////////////////////////////////////////////  

export const getPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Publicacion.find().populate('menor');
    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const getPublicacionById = async (req, res) => {
  try {
    const publicacion = await Publicacion.findById(req.params.id).populate('menor');
    if (!publicacion) {
      return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
    res.status(200).json(publicacion);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const actualizarPublicacion = async (req, res) => {
  try {
    const publicacionActualizada = await Publicacion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!publicacionActualizada) {
      return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
    res.status(200).json(publicacionActualizada);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
};

export const eliminarPublicacion = async (req, res) => {
  try {
      // Obtiene el ID de la publicación a eliminar desde los parámetros de la solicitud
      const { id } = req.params;

      // Verifica si la publicación existe en la base de datos
      const publicacion = await Publicacion.findById(id);
      if (!publicacion) {
          return res.status(404).json({ mensaje: 'La publicación no existe.' });
      }

      // Elimina la publicación de la base de datos
      await publicacion.remove();

      // Retorna un mensaje de éxito
      res.status(200).json({ mensaje: 'La publicación ha sido eliminada correctamente.' });
  } catch (error) {
      res.status(400).json({ mensaje: error.message });
  }
};


