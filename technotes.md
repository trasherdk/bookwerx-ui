##package.json

  ###Scripts

    "lite": "lite-server",
    This is the development server that serves this app.

    "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\" ",
    Run the typescript compiler.  If all is well, then run the typescript 
    compiler in watch mode, to watch for changes to files, and also run
    the "lite" server.
  
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    Type script transpiler.  The -w option will watch the files for changes
    and transpile if necessary.  Configure with tsconfig.json.

  npm prune will remove items no longer referenced by package.json

  ###Production dependencies

    "@angular/core": "2.0.0-rc.4",
    Very important things for Angular, such as Component.  

    "@angular/common": "2.0.0-rc.4",
    Needed by @angular/router. Perhaps configure this as a peed dependency?
    
    "@angular/compiler": "2.0.0-rc.4",
    Needed by @angular/router. Perhaps configure this as a peed dependency?

    "@angular/forms": "0.2.0",
    This app is a UI.  It uses forms.

    "@angular/http": "2.0.0-rc.4",
    This app makes http calls.
    
    "@angular/router": "3.0.0-beta.1",
    We obviously need a router.
    
    "@angular/platform-browser": "2.0.0-rc.4",
    Needed by @angular/router. Perhaps configure this as a peed dependency?

    "@angular/platform-browser-dynamic": "2.0.0-rc.4",
    Needed by @angular/router. Perhaps configure this as a peed dependency?

    "bootstrap": "3.3.6",
    CSS library
    
    "core-js": "^2.4.0",
    Lots of misc goodies for JS.  Probably affects screen formatting.
 
    "reflect-metadata": "^0.1.3",
    Peer dependency of systemjs
    Related to dependency injection.

    "rxjs": "5.0.0-beta.6",
    Needed by @angular/core.  Perhaps configure this as a peer dependency?
    Something to do with observables.
    
    "systemjs": "0.19.27",
    This is our module loader.  Configure this with systemjs.config.js
    
    "zone.js": "^0.6.12"
    Needed by @angular/core.  Perhaps configure this as a peer dependency?
    How does Angular2 efficiently know when to update the view.

    "@angular/router-deprecated": "2.0.0-rc.2",
    "@angular/upgrade": "2.0.0-rc.4",

    "live-server": "^1.0.0",
    
  ###Development/testing dependencies
  
    "concurrently": "2.0.0",
    This will enable us to run two programs concurrently.

    "lite-server": "2.2.0",
    This is a web server that we can use to serve this program.

    "typescript": "1.8.10"
    This is the typescript transpiler.

    "angular2-in-memory-web-api": "0.0.14",
    This is something that lives in memory, we can submit HTTP requests to and get a response.
    What's the relation between this and lite-server?
    
      "http-server": "^0.9.0",
      "jasmine": "^2.4.1",
      "jasmine-core": "^2.4.1",
      "karma": "^1.1.1",
      "karma-chrome-launcher": "^1.0.1",
      "karma-coverage": "^1.1.0",
      "karma-jasmine": "^1.0.2",
      "remap-istanbul": "^0.6.4",
      "systemjs": "^0.19.27",
      "typings": "^1.0.4"

      "postinstall": "typings install",

      "typings": "typings",
      "build": "rm -rf dist && tsc -p src",
      "start1": "http-server -c-1 -o -p 8875 .",
      "pretest": "npm run build",
      "test": "karma start karma.conf.js",
      "posttest": "node_modules/.bin/remap-istanbul -i coverage/coverage-final.json -o coverage -t html",
      "coverage": "http-server -c-1 -o -p 9875 ./coverage"
  
  
