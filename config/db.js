const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected at: ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = connectDB