var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	connect = require('gulp-connect'),
	pug = require('gulp-pug'),
	stylus = require('gulp-stylus'),
	concat = require('gulp-concat'),
	image = require('gulp-image'),
	cssmin = require('gulp-cssmin'),
	copy = require('gulp-copy'),
	rm = require('gulp-rm');

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: 'build'
	})
});

gulp.task('pages', function(){
	return gulp.src('./src/pug/pages/*.pug')
		.pipe(pug())
		.on('error', swallowError)
		.pipe(gulp.dest('./build/templates/static/'))
		.pipe(livereload());
});

gulp.task('elements', function(){
	return gulp.src('./src/pug/elements/*.pug')
		.pipe(pug())
		.on('error', swallowError)
		.pipe(gulp.dest('./build/templates/elements/'))
		.pipe(livereload());
});

gulp.task('includes', function(){
		return gulp.src('./src/pug/includes/*.pug')
			.pipe(pug())
			.on('error', swallowError)
			.pipe(gulp.dest('./build/templates/includes/'))
			.pipe(livereload());
});

gulp.task('styles', function(){
	return gulp.src('./src/stylus/*.styl')
		.pipe(stylus())
		.on('error', swallowError)
		.pipe(gulp.dest('./build/css/'))
		.pipe(livereload());
});

gulp.task('cssminify', function() {
	gulp.src('./src/stylus/*.css')
		.pipe(cssmin())
		.on('error', swallowError)
		.pipe(gulp.dest('./build/css'))
		.pipe(livereload());
});

gulp.task('image', function() {
	gulp.src('./src/img/**')
		.pipe(image())
		.pipe(gulp.dest('./build/img'))
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
	gulp.watch('./src/pug/pages/*.pug', ['pages']);
	gulp.watch('./src/pug/elements/*.pug', ['elements', 'pages']);
	gulp.watch('./src/pug/includes/*.pug', ['includes', 'pages']);
	gulp.watch('./src/stylus/**/*.styl', ['styles']);
	gulp.watch('./src/img/*.*', ['image']);
	gulp.watch('./src/js/*.js', ['scripts']);
});


gulp.task('clean-up', function() {
	return gulp.src('./build/**', { read: false })
		.pipe(rm({ async: false }))
});

//default
gulp.task('default',
			[
				// 'webserver',
				'watch',
				'image',
				'pages',
				'includes',
				'elements',
				'styles',
				'fonts',
				'cssminify',
				'scripts'
			]
);
						
//release
gulp.task('release',
			[
				'image',
				'pages',
				'includes',
				'elements',
				'styles',
				'fonts',
				'cssminify',
				'scripts'
			]
);

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}