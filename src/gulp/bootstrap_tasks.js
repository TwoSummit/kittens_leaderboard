/*  Program Name: bootstrap_tasks.js
 ** Description: Used to store functions for gulp regarding bootstrap
 **
 ** Project  Date        Who  Comments
 ** -------  ----------  ---  ---------------------------------------------------
 **          2018-03-21  CAA  Initial file creation.
 *******************************************************************************/

// Node.js modules
// ------------------------------------------------------------------------------
const gulp = require('gulp');
const cssMin = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

/**
 *  File containing all methods related to gathering of files for bootstrap
 *  and moving those files into the public directory.
 */
module.exports = {
    /**
     *  Retrieves Bootstrap CSS file(s) from ./node_modules/ directory, minifies it, 
     *  moves the file(s) to the ./public/css/ directory.
     */
    get_bootstrap_css: () => {
        return gulp.src([
                        './node_modules/bootstrap/dist/css/bootstrap.min.css',
                    ])
                   .pipe(cssMin({level: {1: {specialComments: 0}}}))
                   .pipe(gulp.dest('./public/css/temp'));
    },

    /**
     *  Retrieves Bootstrap, Popper JS file(s) from ./node_modules/ directory, minifies it,
     *  moves the file(s) to the ./public/js/ directory.
     */
    get_bootstrap_js: () => {
        return gulp.src([
                        './node_modules/bootstrap/dist/js/bootstrap.min.js',
                        './node_modules/popper.js/dist/popper.min.js',
                    ])
                   .pipe(concat('bootstrap.min.js'))
                   // We can't use our normal minfier(uglify) due to the
                   // minifier checking for ES5 compatibility, and bootstrap
                   // uses a few ES6 features such as 'const'
                   //    .pipe(uglify().on('error', function(e){
                   //         console.log(e);
                   //     }))
                   .pipe(gulp.dest('./public/js/temp'));
    }

};