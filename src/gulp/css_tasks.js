/* Program Name: css_tasks.js
 **  Description: Used to store functions for gulp regarding css
 **
 ** Project  Date        Who  Comments
 ** -------  ----------  ---  ---------------------------------------------------
 **          2018-03-21  CAA  Initial file creation.
 *******************************************************************************/

// Node.js modules
// ------------------------------------------------------------------------------
const gulp = require('gulp');
const less = require('gulp-less');
const cssMin = require('gulp-clean-css');

module.exports = {

    /**
     *  Store all custom less in the ./src/less/ directory. This function will 
     *  take the files found in that directory, compile through less, minify them, 
     *  and move them to the ./public/css/ directory.
     */
    get_custom_css: () => {
        return gulp.src([
                            './src/less/*.less',
                        ])
                   .pipe(less())
                   .pipe(cssMin({level: {1: {specialComments: 0}}}))
                   .pipe(gulp.dest('./public/css/temp'));
    },

};