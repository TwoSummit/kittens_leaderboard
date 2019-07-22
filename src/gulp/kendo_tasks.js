/* Program Name: kendo_tasks.js
 **  Description: Used to store functions for gulp regarding kendo
 **
 ** Project  Date        Who  Comments
 ** -------  ----------  ---  ---------------------------------------------------
 **          2018-03-21  CAA  Initial file creation.
 *******************************************************************************/

// Node.js modules
// ------------------------------------------------------------------------------
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssMin = require('gulp-clean-css');
const imageMin = require('gulp-imagemin');
const concat = require('gulp-concat');

/**
 *  File containing all methods related to gathering of files for kendo
 *  and moving those files into the public directory.
 */
module.exports = {

    /**
     *  Retrieves Kendo css file(s) from ./node_modules/ directory, minifies it,
     *  moves the file(s) to the ./public/css/ directory.
     */
    get_kendo_css: () => {  
        return gulp.src([
                        './bower_components/kendo-ui/styles/kendo.material.min.css',
                        './bower_components/kendo-ui/styles/kendo.common.min.css',
                    ])
                   .pipe(concat('kendo.all.css'))
                   .pipe(cssMin({level: {1: {specialComments: 0}}}))
                   .pipe(gulp.dest('./public/css/temp'));
    },

    /**
     *  Retrieves Kendo JS file(s) from ./node_modules/ directory, minifies it,
     *  moves the file(s) to the ./public/js/ directory.
     */
    get_kendo_js: () => {
        return gulp.src([
                        './bower_components/kendo-ui/js/kendo.all.min.js',
                    ])
                   .pipe(uglify().on('error', function(e){
                        console.log(e);
                    }))
                   .pipe(gulp.dest('./public/js/temp'));
    },

    /**
     *  Retrieves Kendo image file(s) from ./node_modules/ directory, minifies it,
     *  moves the file(s) to the ./public/css/images/ directory.
     */
    get_kendo_images: () => {
        return gulp.src([
                        './bower_components/kendo-ui/styles/images/**',
                    ])
                   .pipe(imageMin())
                   .pipe(gulp.dest('./public/css/temp/images'));
    },

    /**
     *  Retrieves Kendo font file(s) from ./node_modules/ directory,
     *  moves the file(s) to the ./public/css/fonts/ directory.
     */
    get_kendo_fonts: () => {
        return gulp.src([
                        './bower_components/kendo-ui/styles/fonts/**',
                    ])
                   .pipe(gulp.dest('./public/css/temp/fonts'));
    },

    /**
     *  Retrieves Kendo file(s) from their default directory inside the ./node_modules/ directory, 
     *  moves the file(s) to the ./public/css/default/ directory.
     */
    get_kendo_default: () => {
        return gulp.src([
                        './bower_components/kendo-ui/styles/default/**',
                    ])
                   .pipe(gulp.dest('./public/css/temp/default'));
    },

    /**
     *  Still In development. This allows a developer to define which kendo files to include
     *  in the minification file. This is to resolve the giant file size
     *  of kendo.all.min.js by picking and choosing which files we will use.
     *  The downside is there are no quick and easy ways to find out which 
     *  files we need to include here.
     */
    concatKendoJSFiles: () => {
        return gulp.src(['./node_modules/@progress/kendo-ui/js/jquery.js',
                        './node_modules/@progress/kendo-ui/js/kendo.core.js',
                        './node_modules/@progress/kendo-ui/js/kendo.data.js',
                        './node_modules/@progress/kendo-ui/js/kendo.columnsorter.js',
                        './node_modules/@progress/kendo-ui/js/kendo.calendar.js',
                        './node_modules/@progress/kendo-ui/js/kendo.popup.js',
                        './node_modules/@progress/kendo-ui/js/kendo.datepicker.js',
                        './node_modules/@progress/kendo-ui/js/kendo.userevents.js',
                        './node_modules/@progress/kendo-ui/js/kendo.numerictextbox.js',
                        './node_modules/@progress/kendo-ui/js/kendo.validator.js    ',
                        './node_modules/@progress/kendo-ui/js/kendo.binder.js',
                        './node_modules/@progress/kendo-ui/js/kendo.editable.js',
                        './node_modules/@progress/kendo-ui/js/kendo.draganddrop.js',
                        './node_modules/@progress/kendo-ui/js/kendo.window.js',
                        './node_modules/@progress/kendo-ui/js/kendo.list.js',
                        './node_modules/@progress/kendo-ui/js/kendo.dropdownlist.js',
                        './node_modules/@progress/kendo-ui/js/kendo.filtermenu.js',
                        './node_modules/@progress/kendo-ui/js/kendo.menu.js',
                        './node_modules/@progress/kendo-ui/js/kendo.columnmenu.js',
                        './node_modules/@progress/kendo-ui/js/kendo.groupable.js',
                        './node_modules/@progress/kendo-ui/js/kendo.autocomplete.js',
                        './node_modules/@progress/kendo-ui/js/kendo.filtercell.js',
                        './node_modules/@progress/kendo-ui/js/kendo.pager.js',
                        './node_modules/@progress/kendo-ui/js/kendo.selectable.js',
                        './node_modules/@progress/kendo-ui/js/kendo.reorderable.js',
                        './node_modules/@progress/kendo-ui/js/kendo.resizable.js',
                        './node_modules/@progress/kendo-ui/js/kendo.fx.js',
                        './node_modules/@progress/kendo-ui/js/kendo.mobile.scroller.js',
                        './node_modules/@progress/kendo-ui/js/kendo.view.js',
                        './node_modules/@progress/kendo-ui/js/kendo.mobile.view.js',
                        './node_modules/@progress/kendo-ui/js/kendo.mobile.loader.js',
                        './node_modules/@progress/kendo-ui/js/kendo.mobile.pane.js',
                        './node_modules/@progress/kendo-ui/js/kendo.mobile.popover.js',
                        './node_modules/@progress/kendo-ui/js/kendo.mobile.shim.js',
                        './node_modules/@progress/kendo-ui/js/kendo.mobile.actionsheet.js',
                        './node_modules/@progress/kendo-ui/js/kendo.ooxml.js',
                        './node_modules/@progress/kendo-ui/js/kendo.excel.js',
                        './node_modules/@progress/kendo-ui/js/kendo.color.js',
                        './node_modules/@progress/kendo-ui/js/kendo.drawing.js',
                        './node_modules/@progress/kendo-ui/js/kendo.pdf.js',
                        './node_modules/@progress/kendo-ui/js/kendo.progressbar.js',
                        './node_modules/@progress/kendo-ui/js/kendo.grid.js',
                        ])
                   .pipe(concat('kendo_grid.js'))
                   .pipe(uglify().on('error', function(e){
                        console.log(e);
                    }))
                   .pipe(gulp.dest('./dist/js'));
    }
};