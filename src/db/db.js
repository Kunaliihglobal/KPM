const mongoose = require('mongoose');
async function connectToDatabase() {
   await mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000, 
        bufferCommands: false         
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('MongoDB connection error:', error);
        mongoose.connection.on('error', (error) => {
            console.error('MongoDB connection error:', error);
        });
        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });
    });
   
}

connectToDatabase();