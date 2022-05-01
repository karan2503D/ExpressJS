const express = require("express");
const app = express();

// Routing
// app.get('/', function(req,res){ 
//     res.send("Response")
// });

// app.post('/form', function (req, res) {
//     res.send("Post")
// });

// app.all('/form', function (req, res) {
//     res.send("All Request");
// });

// app.put('/',function(req,res){
//     res.send("Put");
// })

// app.delete('/', function (req, res) {
//     res.send("delete");
// })

// URL 
// app.get('/:id([0-9,a-z]{4})',function(req,res){
//     res.send("ID is "+req.params.id) ; 
// })

// app.get('/users/:name/:id', function (req, res) {
//     res.send("Data is " + req.params.name+" "+req.params.id);
// })

// app.get('/users/:name/:id', function (req, res) {
//     res.send("Data is " + req.params.name + " " + req.params.id);
// })

// app.get('*',function(req,res){
//     res.send("URL Not Found");
// })

// Middleware
// app.use(function(req, res, next){
//     console.log("First Call");
//     next();
// })
// app.get('/users',function(req,res, next){
//     res.send('Get');
//     next()
// });
// app.get('/users', function (req, res, next) {
//     console.log("Last Call");
// });

// const bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extended:false}));
// app.use(bodyparser.json())
// Example
// app.use('/:age',function(req,res,next){
//     if(req.params.age < 18){
//         res.redirect('/fail');
//     }
//     next()
// })
// app.get('/fail', function (req, res) {
//     res.send("Not Found")
// })
// app.get('/:age',function(req,res){
//     res.send("Found")
// })
// Template
// app.set('view engine','pug');
// app.set('views','./views')
// app.get('/home',function(req,res){
//     res.render('home',{
//         // name:"Test Name",
//         // url:"google.com"
//         title: "title",
//         users:{
//             name:"test",
//             age:"21",
//         }
//     });
// })

// Static FilesAnd Template Rendering
// app.set('view engine', 'pug');
// app.set('views','./views')
// app.get('/',function(req,res){
//     res.render('index')
// })
// app.use(express.static('foldername'))

app.set('view engine', 'pug');
app.set('views', './views')
app.get('/', function (req, res) {
     res.render('form');
})

app.listen(8000, () => {
    console.log("Running on 8000")
})

