/* Program Name: js_tasks.js
 **  Description: Used to store functions for gulp regarding js
 **
 ** Project  Date        Who  Comments
 ** -------  ----------  ---  ---------------------------------------------------
 **          2018-03-21  CAA  Initial file creation.
 *******************************************************************************/

// Node.js modules
// ------------------------------------------------------------------------------
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

module.exports = {

    /**
     *  Use Yarn to install jquery. This function will take the file
     *  installed from yarn, minify it, and move it to the ./public/js/ directory.
     */
    get_jquery: () => {
        return gulp.src(['./node_modules/jquery/dist/jquery.min.js'])
                   .pipe(uglify().on('error', function(e){
                        console.log(e);
                    }))
                   .pipe(gulp.dest('./public/js/temp'));
    },

    /**
     *  Store all custom js in the ./src/js/ directory. This function will 
     *  take the files found in that directory, concatenate them, compile 
     *  them through less, minify them, and move them to the ./public/js/ 
     *  directory as one file named javascript.js
     */
    get_custom_js: () => {
        return gulp.src([
                            './src/js/**',
                        ])
                    .pipe(concat('javascript.js'))
                    .pipe(uglify().on('error', function(e){
                        console.log(e);
                    }))
                    .pipe(gulp.dest('./public/js/temp'));
    }

};
