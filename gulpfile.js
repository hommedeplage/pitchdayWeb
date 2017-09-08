var gulp = require("gulp");
	livereload = require('gulp-livereload');
	pug = require('gulp-pug'),
	stylus = require('gulp-stylus'),
	concat = require('gulp-concat'),
	image = require('gulp-image'),
	cssmin = require('gulp-cssmin'),
	connect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer');
	coffee = require('gulp-coffeescript')

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: 'build'
	})
});

gulp.task('pages-prod', function(){
	return gulp.src('./src/pug/*.pug')
		.pipe(pug({data:{
			host: "pitchday.io"
		}}))
		.on('error', swallowError)
		.pipe(gulp.dest('./build/'))
		.pipe(livereload());
});

gulp.task('pages-dev', function(){
	return gulp.src('./src/pug/*.pug')
		.pipe(pug({data:{
			host: "localhost:5000"
		}}))
		.on('error', swallowError)
		.pipe(gulp.dest('./build/'))
		.pipe(livereload());
});

gulp.task('image', function() {
	gulp.src('./src/img/**')
		.pipe(image())
		.pipe(gulp.dest('./build/img'))
		.pipe(livereload());
});

gulp.task('styles', function(){
	return gulp.src('./src/stylus/*.styl')
		.pipe(stylus({
	      'include css': true
    }))
		.on('error', swallowError)
		.pipe(cssmin())
		.on('error', swallowError)
		.pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .on('error', swallowError)
		.pipe(gulp.dest('./build/css/'))
		.pipe(livereload());
});

gulp.task('coffee', function() {
	gulp.src('./src/coffee/*.coffee')
		.pipe(coffee({bare: true})
			.on('error', swallowError))
		.pipe(gulp.dest('./build/js/'))
		.pipe(livereload());
});

gulp.task('fonts', function(){
	gulp.src('./src/fonts/*.{ttf,woff,woff2,otf}')
		.pipe(gulp.dest('./build/fonts/'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./src/pug/*.pug', ['pages-dev']);
	gulp.watch('./src/stylus/**/*.styl', ['styles']);
	gulp.watch('./src/img/**', ['image']);
	gulp.watch('./src/coffee/**', ['coffee']);
});


// gulp.task('clean-up', function() {
// 	return gulp.src('./build/**', { read: false })
// 		.pipe(rm({ async: false }))
// });

//default
gulp.task('default',
			[
				'message'
			]
);



// prodcution
gulp.task('prod',
			[
				'image',
				'pages-prod',
				'styles',
				'fonts',
				'coffee',
			]
);

// prodcution
gulp.task('dev',
			[
				'webserver',
				'watch',
				'image',
				'pages-dev',
				'styles',
				'fonts',
				'coffee',
			]
);


function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

gulp.task("message", () => {
	console.log("\033[0;31m Please specify for which environment you are building.\033[0m \r\n")
	console.log(" Options: \r\n")
	console.log(" - Production: \"gulp prod\" ")
	console.log(" - Development: \"gulp dev\" \r\n")
})