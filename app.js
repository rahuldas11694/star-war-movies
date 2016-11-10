var express =  require('express');

var app = express();

app.set('view engine','ejs');

/*
we need to specify the directory of our static assests like images, scripts, stylesheet

*/
// require module called path
 
 var path = require('path');

 // this is telling express that staic assets are in public dierectory
 // without this u wont be able to get images
 // it sasves time to go into paricular directory
 app.use(express.static(path.join(__dirname,'public')));


// we need to specify the view engine bcz if v render ejdsfile
// inside view folder we r gonna create ejs file

// route

// home
  

var routes = require('./routes'); 
/*
this is going to take all the routes from routes folder
and put it in routes variable

*/


app.get('/',routes.home);



app.get('/star_wars_episode/:episode_number?', routes.movie_single);

// not found

app.get('*',routes.notFound);


// app.listen(3000,function()
// 	{
// 		console.log("the application is running on port 3000");
// 	});

app.listen(process.env.PORT || 3000);


