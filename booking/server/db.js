const mongoose = require("mongoose");
const db=process.env.DATABASE;

dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect(db , {useNewUrlParser : true});
         console.log('Mongo DB Connection on booking success')
     } catch (error) {
         console.log('Mongo DB Connection failed', error)
     }

}

module.exports = mongoose
