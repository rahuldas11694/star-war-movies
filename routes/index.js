var moviesJSON = require('../movies.json');


exports.home =function(req,res){

//res.send("this is a server response on hte homepage");
// we dnt need to specify the views path bcz node will check it
//also we dnt need to give extension
/*
we can pass function literals in render function
with name value paire so tht we can access them later on
*/
	var movies = moviesJSON.movies;

// right side movies is in render function is the above movies and left side is we are going to reffer in view
	
	res.render('home',
		{
			title: 'star war movies',
			movies: movies
		});
	};


exports.movie_single= function(req,res)

	{
		var episode_number= req.params.episode_number;

		var movies = moviesJSON.movies;

		
		if(episode_number>=1 && episode_number<=6)
		{
			var movie = movies[episode_number-1];    // if i put it abv if blck and recvs 0 as param then u il get error: cn nt read prop title of undefined

			var title = movie.title;

			var main_characters = movie.main_characters;

			res.render('movie_single',
			{
				movies:movies,
				title:title,
				movie: movie,
				main_characters: main_characters
			});


		} else{
			
			res.render('notFound',{
				movies:movies,
				title:"this is not the page you are looking for"
			});
			res.send("this is not the page you are looking for");
		}

	};


exports.notFound = function(req,res)
	{
		var movies = moviesJSON.movies;
		res.render("notFound",{
			movies:movies,
			title:"this is not the page you are looking for"
		});
		res.send("not found:404 err");
	};	