const mongoose= require("mongoose");  
const app=express();
const PORT=5000;
const data=require('./data.js')
 require('./models/post')
 app.use(require("./routes/createpost"))
