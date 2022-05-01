const express = require("express");
const app = express();
const session = require("express-session");
app.use(session({secret:"secret"}));

// app.get('/',function(req,res){
//      req.session.username = "karan";
//      res.send("Session Set");
// });

// app.get('/', function (req, res) {
//     if(req.session.user_visit){
//         req.session.user_visit++;
//     }else{
//         req.session.user_visit = 1;

//     }
// });

app.listen(3000);