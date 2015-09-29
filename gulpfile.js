var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function() {
	nodemon({
		script: 'app.js',
		ext: 'js',
		env: {
			PORT: 8000
		},
		ignore: ['./node_modules/**']
	})
	.on('restart', function() {
		console.log('Restarting...');
	});
});

gulp.task('mocha', function() {
	return gulp.src(['test/*.js'], {read: false})
		.pipe(mocha({reporter: 'list'}))
		.on('error', gutil.log);
});

gulp.task('watch-mocha', function() {
	gulp.run('mocha');
	gulp.watch(['./**/*.js', 'test/**/*.js'], ['mocha']);
});