It's a real nuisance not being able to add comments directly to json config files.
Who dropped that ball?  Regardless of the responsible party, I still need these notes.
Hence, put 'em here.

##Scripts

    "e2e.ci": "gulp build.prod --color && gulp build.js.e2e --color && gulp e2e --color",
    "start": "gulp serve.dev --color",
    "test":  "gulp test --color",
    "tests.all": "npm test && npm run e2e.ci",


    "build.dev": "gulp build.dev --color",
    "build.dev.watch": "gulp build.dev.watch --color",
    "build.e2e": "gulp build.e2e --color",
    "build.prod": "gulp build.prod --color",
    "build.test": "gulp build.test --color",
    "build.test.watch": "gulp build.test.watch --color",
    "generate.manifest": "gulp generate.manifest --color",
    "e2e": "protractor",
    "e2e.live": "protractor --elementExplorer",
    "gulp": "gulp",
    "karma": "karma",
    "karma.start": "karma start",
    "postinstall": "typings install && gulp check.versions && npm prune && gulp webdriver",
    "reinstall": "npm cache clean && npm install",
    "serve.coverage": "remap-istanbul -b src/ -i coverage/coverage-final.json -o coverage -t html && npm run gulp -- serve.coverage --color",
    "serve.dev": "gulp serve.dev --color",
    "serve.e2e": "gulp serve.e2e --color",
    "serve.prod": "gulp serve.prod --color",
    "tasks.list": "gulp --tasks-simple --color",
    "tests.all": "npm test && npm run e2e.ci",
    "webdriver-start": "webdriver-manager start",
    "webdriver-update": "webdriver-manager update"
 
##Dependencies



     "@angular/common": "2.0.0-rc.4",
     "@angular/compiler": "2.0.0-rc.4",
     "@angular/core": "2.0.0-rc.4",
     "@angular/forms": "0.2.0",
     "@angular/http": "2.0.0-rc.4",
     "@angular/platform-browser": "2.0.0-rc.4",
     "@angular/platform-browser-dynamic": "2.0.0-rc.4",
     "@angular/router": "3.0.0-beta.2",
     "es6-module-loader": "0.17.11",
     "core-js"", Misc polyfills and extras.
     "rxjs": "5.0.0-beta.6",  Beta 10 breaks this.
     "systemjs": "0.19.27",
     "zone.js", Something to do with dealing with async calls.

##Development Dependencies

     "async",
     "autoprefixer", Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
     "browser-sync", (config in seed.config.ts)
     "codelyzer": "0.0.25",
     "colorguard": "1.2.0",
     "doiuse": "2.3.0",
     "express": "4.13.4",
     "express-history-api-fallback": "2.0.0",
     "gulp",
     "gulp-cached", 
     "gulp-clean-css",minify CSS using clean-css 
     "gulp-concat": "2.6.0",
     "gulp-concat-css": "2.2.0",
     "gulp-inject", Inject files into index.html
     "gulp-inline-ng2-template": "1.1.2",
     "gulp-load-plugins",
     "gulp-plumber", fix some error in piping streams
     "gulp-postcss": "6.1.1",
     "gulp-protractor": "2.3.0",
     "gulp-replace": "0.5.4",
     "gulp-sourcemaps",
     "gulp-template",
     "gulp-tslint": "4.3.3",
     "gulp-typescript", Deal with typescript compilation workflow.
     "gulp-uglify": "1.5.3",
     "gulp-util", Utilities for gulp, such as the logger.
     "gulp-watch",
     "is-ci": "1.0.8",
     "isstream", Determine if an object is a stream.
     "karma-chrome-launcher": "1.0.1",
     "merge-stream", Create a stream that emits events from multiple other streams.
     "postcss-reporter": "1.3.3",
     "protractor": "3.3.0",
     "run-sequence", Runs a sequence of gulp tasks in the specified order. Temporary hack.
     "slash", Convert windows backslash paths to slash paths
     "stylelint": "6.3.3",
     "stylelint-config-standard": "6.0.0",
     "systemjs-builder": "0.15.14",
     "tslint": "3.10.2",
     "tildify", Convert absolute paths into the ~ version.
     "ts-node", TypeScript execution env and REPL for node.

The 'import' statement appears to come from ts-node _and_ typescript.
If we remove _either_ of these dependencies, then import triggers an error.  We need
both dependencies.
 
      "typescript", See ts-node.
      "yargs": "4.2.0"  Deal with the command line.

--------

     "compression": "1.6.2",
     "connect": "3.4.1",
     "connect-history-api-fallback": "1.2.0",
     "connect-livereload": "0.5.4",
     "deep-extend": "0.4.1",
     "event-stream": "3.3.2",
     "extend": "3.0.0",
     "gulp-filter": "4.0.0",
     "gulp-progeny": "0.2.1",
     "gulp-sass": "2.3.1",
     "gulp-sass-lint": "1.1.1",
     "gulp-shell": "0.5.2",
     "gulp-watch": "4.3.5",
     "jasmine-core": "2.4.1",
     "jasmine-spec-reporter": "2.4.0",
     "karma": "0.13.22",
     "karma-coverage": "1.0.0",
     "karma-jasmine": "1.0.2",
     "karma-mocha-reporter": "2.0.3",
     "open": "0.0.5",
     "protractor": "3.3.0",
     "remap-istanbul": "0.6.3",
     "rimraf": "2.5.2",
     "semver": "5.1.0",
     "serve-static": "1.10.2",
     "stream-series": "0.1.1",
     "tiny-lr": "0.2.1",
     "traceur": "0.0.91",
     "tslint-stylish": "2.1.0-beta",
     "typings": "1.0.4",
     "vinyl-buffer": "1.0.0",
     "vinyl-source-stream": "1.1.0",
     "walk": "2.3.9",
     
  