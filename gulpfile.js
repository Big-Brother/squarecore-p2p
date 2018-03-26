'use strict';

var gulp = require('gulp');
var squarecoreTasks = require('squarecore-build');

squarecoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
