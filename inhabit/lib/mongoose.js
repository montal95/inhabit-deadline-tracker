import mongoose from "mongoose";

//Connects to original connection if available
const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState !== 1) {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return handler(req, res);
};

//Makes initial connection
const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to Mongo");
});

export default connectDB;
