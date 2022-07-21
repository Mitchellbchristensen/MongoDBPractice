const mongoose = require('mongoose');
const dbConnectionURI = `url`

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(dbConnectionURI)

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB