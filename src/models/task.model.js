import mongoose from "mongoose";

// Ruta model
const rutaSchema = new mongoose.Schema({

    fechaRuta: { type: Date, required: true },

    puntoSalida: { type: String, required: true },

    geosalida: {
        latitud: { type: String, required: true },
        longitud: { type: String, required: true },
    },
    puntoLlegada: { type: String, required: true },

    geollegada: {
        latitud: { type: String, required: true },
        longitud: { type: String, required: true },
    },

    tiempoEstimado: { type: Date, required: true },

    estado: { type: String, required: true },

    medioTransporte: { type: String, required: true },

    //alertasAvisosIdalertasAvisos: { type: Number, ref: 'AlertasAvisos' },

    //puntosDeReferenciaIdpuntosReferencia: { type: Number, ref: 'PuntosDeReferencia' },

    //tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' },

   // menorId: { type: mongoose.Schema.Types.ObjectId, ref: 'menors', required: true},
},

    
{
    timestamps: true
});

export default mongoose.model('Ruta', rutaSchema);
