// publicacion.js

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const publicacionSchema = new Schema({
  menor: { type: Schema.Types.ObjectId, ref: 'Menor', required: true },
  fechaPublicacion: { type: Date, default: Date.now },
  foto: { type: String },
  numeroContacto: { type: Number },
  ultimaVezVistoen:{ type: String , required: true},
  UltimaVestimenta: { type: String , required: true }
});

const Publicacion = model('Publicacion', publicacionSchema);

export default Publicacion;
