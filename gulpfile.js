
'use strict';
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const stylemod = require('gulp-style-modules');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');
const importOnce = require('node-sass-import-once');
const cssmin = require('gulp-cssmin');

var dev = process.argv.indexOf('--dist') < 0;

var getName = function(file) {
	return path.basename(file.path, path.extname(file.path));
};

var styleModuleDest = function(file) {
	return file.base;
};

function getTask() {
	return function() {
		return gulp.src([
			'./public/*.scss',
			'./public/components/*.scss',
			'./public/components/**/*.scss'
		])
			.pipe(plugins.sass({
				includePaths: './public/bower_components/',
				importer: importOnce,
				importOnce: {
					index: true,
					bower: true
				}
			})
				.on('error', plugins.sass.logError))
			.pipe(autoprefixer())
			.pipe(cssmin())
			.pipe(stylemod({
				// All files will be named 'styles.html'
				filename: function(file) {
					var name = getName(file) + '-styles';
					return name;
				},
				// Use '-css' suffix instead of '-styles' for module ids
				moduleId: function(file) {
					return getName(file) + '-styles';
				}
			}))
			.pipe(gulp.dest(styleModuleDest));

	};
}

// -----------------------------------------------------------------------------
// Task: Compile : Scripts, Sass, EJS, All
// -----------------------------------------------------------------------------
gulp.task('compile:sass', getTask());
