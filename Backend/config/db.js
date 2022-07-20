const mongoose = require('mongoose');
const dbConnectionURI = `mongodb://claimx_automation-reports_test:KxR65nXO0q4EjZEJ@pl-0-us-west-2.vh4xo.mongodb.net:1024,pl-0-us-west-2.vh4xo.mongodb.net:1025,pl-0-us-west-2.vh4xo.mongodb.net:1026/claimx_automation-reports_test?ssl=true&replicaSet=atlas-gikv6i-shard-0&authSource=admin&retryWrites=true&w=majority`

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