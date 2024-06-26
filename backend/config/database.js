const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_LOCAL_URL, {
    })
    .then((con) => {
      console.log(`MongoDB connected: ${con.connection.host}`);
    })
    .catch((err) => {
      console.error(`MongoDB connection error: ${err}`);
    });
};

module.exports = connectDatabase;
