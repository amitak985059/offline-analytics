const mongoose = require('mongoose')


function connectToDb() {
  mongoose.connect(/*process.env.DB_URI*/ 'mongodb://127.0.0.1:27017/logging',  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
  });
}


module.exports = connectToDb;