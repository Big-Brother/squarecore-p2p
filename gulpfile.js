'use strict';

var gulp = require('gulp');
var squarecoreTasks = require('@big-brother/squarecore-build');

squarecoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
