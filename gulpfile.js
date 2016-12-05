var gulp 					= require('gulp');
var php						= require('gulp-connect-php');
var browserSync 	= require('browser-sync').create();
var sass 					= require('gulp-sass');
var autoprefixer 	= require('gulp-autoprefixer');

// static server + watch scss/html files
gulp.task('serve', ['php','sass'], function() {
	browserSync.init({
		server: "./",
		socket: {
			namespace: "localhost:3000"
		}
	});

	gulp.watch("./sass/*.scss", ['sass']);
	gulp.watch("./js/*.js").on('change', browserSync.reload);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('php', function() {
	php.server({ 
		base: './', 
		hostname: 'localhost',
		port: 3000, 
		keepalive: true})
})

// compile sass & auto-inject into browsers
//sass
gulp.task('sass', function() {
	return gulp.src('./sass/*.scss')
	.pipe(sass().on('error', sass.logError))
//pipe to autoprefixer
	.pipe(autoprefixer({
		browsers: ['last 5 versions'],
		cascade: false
	}))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);