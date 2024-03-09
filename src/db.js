import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://NicoleGalindez:nicole2501@cluster0.rw5wf5u.mongodb.net/Backend_ConfiApp';
    await mongoose.connect(uri, );
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    process.exit(1); // Termina la aplicación si no puede conectarse a la base de datos
  }
};

export default connectDB;
