const mongoose = require('mongoose')
const DB_URL = process.env.DB_URL;
const options = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}
mongoose.connect(DB_URL,options).then(()=>{
    console.log("Connected to mongoose")
}).catch((err)=>{
    console.log(err)
})

