const mongoose = require ('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('BD conectado')
    } catch (error) {
        console.log('Erro de conexão com BD');
    }
}

module.exports = {db}