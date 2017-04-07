var gulp=require("gulp"),rename=require("gulp-rename"),uglify=require("gulp-uglify"),header=require("gulp-header"),concat=require("gulp-concat"),replace=require("gulp-replace"),fs=require("fs"),paths={componentsFile:"components.js",components:["components/**/*.js","!components/**/*.min.js"],main:["components/prism-core.js","components/prism-markup.js","components/prism-css.js","components/prism-clike.js","components/prism-javascript.js","plugins/file-highlight/prism-file-highlight.js"],plugins:["plugins/**/*.js","!plugins/**/*.min.js"],showLanguagePlugin:"plugins/show-language/prism-show-language.js",autoloaderPlugin:"plugins/autoloader/prism-autoloader.js",changelog:"CHANGELOG.md"};gulp.task("components",function(){return gulp.src(paths.components).pipe(uglify()).pipe(rename({suffix:".min"})).pipe(gulp.dest("components"))}),gulp.task("build",function(){return gulp.src(paths.main).pipe(header("\n/* **********************************************\n     Begin <%= file.relative %>\n********************************************** */\n\n")).pipe(concat("prism.js")).pipe(gulp.dest("./"))}),gulp.task("plugins",["languages-plugins"],function(){return gulp.src(paths.plugins).pipe(uglify()).pipe(rename({suffix:".min"})).pipe(gulp.dest("plugins"))}),gulp.task("watch",function(){gulp.watch(paths.components,["components","build"]),gulp.watch(paths.plugins,["plugins","build"])}),gulp.task("languages-plugins",function(e){fs.readFile(paths.componentsFile,{encoding:"utf-8"},function(s,n){if(s)e(s);else{n=n.replace(/^var\s+components\s*=\s*|;\s*$/g,"");try{n=JSON.parse(n);var p={},i={};for(var a in n.languages)if("meta"!==a){var u=n.languages[a].displayTitle||n.languages[a].title,l=a.substring(0,1).toUpperCase()+a.substring(1);u!==l&&(p[a]=u);for(var g in n.languages[a].aliasTitles)p[g]=n.languages[a].aliasTitles[g];n.languages[a].require&&(i[a]=n.languages[a].require)}var t=JSON.stringify(p),r=JSON.stringify(i),o=[{plugin:paths.showLanguagePlugin,map:t},{plugin:paths.autoloaderPlugin,map:r}],c=0,m=o.length,f=function(){++c===m&&e&&e()};o.forEach(function(e){var s=gulp.src(e.plugin).pipe(replace(/\/\*languages_placeholder\[\*\/[\s\S]*?\/\*\]\*\//,"/*languages_placeholder[*/"+e.map+"/*]*/")).pipe(gulp.dest(e.plugin.substring(0,e.plugin.lastIndexOf("/"))));s.on("error",f),s.on("end",f)})}catch(s){e(s)}}})}),gulp.task("changelog",function(e){return gulp.src(paths.changelog).pipe(replace(/#(\d+)(?![\d\]])/g,"[#$1](https://github.com/PrismJS/prism/issues/$1)")).pipe(replace(/\[[\da-f]+(?:, *[\da-f]+)*\]/g,function(e){return e.replace(/([\da-f]{7})[\da-f]*/g,"[`$1`](https://github.com/PrismJS/prism/commit/$1)")})).pipe(gulp.dest("."))}),gulp.task("default",["components","plugins","build"]);