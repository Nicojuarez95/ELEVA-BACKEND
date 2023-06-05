import mongoose from "mongoose";

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO)
    .then(() => console.log('Base de datos conectada'))
    .catch(err => console.log(err))