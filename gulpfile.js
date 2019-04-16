"use strict";

// ◘◘◘◘◘◘ Load Gulp ◘◘◘◘◘◘◘ 
const { src, dest, task, watch, series, parallel } = require("gulp"),

        // ◘◘◘◘◘◘ Gulp Packages ◘◘◘◘◘◘◘ 
        sourcemaps                = require('gulp-sourcemaps'),

        autoprefixer              = require("autoprefixer"),
        postcss                   = require("gulp-postcss"),
        nested                    = require("postcss-nested"),
        cssImport                 = require("postcss-import"),
        mixins                    = require("postcss-mixins"),
        responsiveType            = require("postcss-responsive-type"),
        postcssCustomProperties   = require("postcss-custom-properties"),
        simpleVars                = require("postcss-simple-vars"),
        each                      = require("postcss-each"),
        functions                 = require("postcss-functions"),
        conditionals              = require("postcss-conditionals"),
        postcssPresetEnv          = require('postcss-preset-env'),
        cssnano                   = require('cssnano'),

        del                       = require("del"),
    
        // ◘◘◘◘◘◘ Paths ◘◘◘◘◘◘◘ 
        srcDir                    = './src/',
        buildDir                  = './docs/', // Or dist, I renamed it to 'docs' for github pages
        tempDir                   = './_includes/',

        
        styleSRC                  = srcDir  + 'assets/styles/App.css',
        styleDEST                 = tempDir + 'assets/styles',

        jsAppSRC                  = srcDir  + 'assets/scripts/App.js',
        jsVendorSRC               = srcDir  + 'assets/scripts/vendor/Vendor.js',
        jsAppDEST                 = tempDir + 'scripts/',
      
        styleWatch                = srcDir   + 'assets/styles/**/*.css';
        

/* ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ *
 * ◘◘◘◘◘◘ Styles ◘◘◘◘◘◘◘ *
 * ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ */

function styles() {
    return src(styleSRC)
        //.pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.init())
        .pipe(postcss(
            [
                cssImport,
                mixins,
                each,
                functions,
                conditionals,
                simpleVars,
                postcssCustomProperties,
                responsiveType,
                nested,
                autoprefixer,
                postcssPresetEnv({ stage: 0 }),
                cssnano()
            ]
        ))

        .on("error", function (errorInfo) {
            console.log(errorInfo.toString());
            this.emit("end");
        })

        .pipe(sourcemaps.write('.'))
        .pipe(dest( styleDEST ))
}

 
/* ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ *
 * ◘◘◘◘◘◘ WATCH ◘◘◘◘◘◘◘ *
 * ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ */

function watch_files() {
    watch(styleWatch, series(styles));
}


exports.styles = styles;

/* ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ *
 * ◘◘◘◘◘◘ Default ◘◘◘◘◘◘ *
 * ◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘◘ */

task("default", parallel(
    watch_files
));

