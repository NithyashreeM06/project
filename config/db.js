import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Load environment variables

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://reddygreesh14:8ZmA2GMAEqKlQiEi@cluster1.ghzn7.mongodb.net/webdata?retryWrites=true&w=majority&appName=Cluster1');
     
   
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;


