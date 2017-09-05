var gulp = require("gulp");
	livereload = require('gulp-livereload');
	pug = require('gulp-pug'),
	stylus = require('gulp-stylus'),
	concat = require('gulp-concat'),
	image = require('gulp-image'),
	cssmin = require('gulp-cssmin'),
	connect = require('gulp-connect'),
	autoprefixer = require('gulp-autoprefixer')


// livereload.listen();

// gulp.task('reload', function() {
// 	gulp.watch('./**', event => {
// 		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
// 		livereload.changed(event.path);
// 	});
// });

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: 'build'
	})
});

gulp.task('pages', function(){
	return gulp.src('./src/pug/*.pug')
		.pipe(pug())
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

gulp.task('fonts', function(){
	gulp.src('./src/fonts/*.{ttf,woff,woff2,otf}')
		.pipe(gulp.dest('./build/fonts/'))
		.pipe(livereload());
});

gulp.task('scripts', function() {
	gulp.src('./src/js/*.js')
		.pipe(gulp.dest('./build/js/'))

	// return gulp.src('./src/js/*.js')
	// 	.pipe(concat('main.js'))
	// 	.pipe(gulp.dest('./build/js'))
});

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./src/pug/*.pug', ['pages']);
	gulp.watch('./src/stylus/**/*.styl', ['styles']);
	gulp.watch('./src/img/**', ['image']);
	gulp.watch('./src/js/*.js', ['scripts']);
});


gulp.task('clean-up', function() {
	return gulp.src('./build/**', { read: false })
		.pipe(rm({ async: false }))
});

//default
gulp.task('default',
			[
				'webserver',
				'watch',
				'image',
				'pages',
				'styles',
				'fonts',
				'scripts'
			]
);


function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}