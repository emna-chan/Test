const express = require('express');
const app = express();
const port=3000;

app.set('view engine' , 'ejs');

app.get('/' , function (req,res) {
    res.render('project.ejs');
});
app.get('/page2' , function (req,res) {  
    res.render('page2.ejs');
});
app.get('/page3', function (req,res) {
    res.render('page3.ejs');
});

app.get('/page4', function (req,res) {
    res.render('page4.ejs');
});
app.listen(port,function(error) {
    if(error) {
        console.log('something went wrong' ,error);
    } else {
        console.log('Listening on port 3000..');
    }
});
