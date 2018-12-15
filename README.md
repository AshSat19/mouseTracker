# MouseTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## What is this about ?

This is a simple MEAN-stack project. At the front-end we have two pages in paths 'http://localhost:4200/home' and http://localhost:4200/home/admin'. In the '/home' page we have images of 5 original Avengers. All clicks and hovers on the images are logged in a MongoDB database called mouseTracker by making an HTTP POST request to save the hover and click data. In the '/home/admin' page, We display statistics of the clicks and hovers.

The Node-Express backend can be run by executing 'node app.js' within the 'api' folder in this repository. A Mongoose-assisted MongoDB connection is made on running 'app.js', to the local Mongo shell at 'mongo://127.0.0.1:27017/mouseTracker'. If you do not have a local mongo installation, edit the db.connstring parameter in the file 'api/config/dev.json'.

In case you find any bugs or errors, ping me.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
