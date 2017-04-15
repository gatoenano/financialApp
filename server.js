// server.js
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// serve angular front end files from root path
// app.use('/', express.static('dist', { redirect: false }));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.use((req, res, next) => {
 res.header('Content-Security-Policy', 'upgrade-insecure-requests');
 next();
})
// rewrite virtual urls to angular app to enable refreshing of internal pages
// router.get('*', function (req, res, next) {
//     res.sendFile(path.resolve('dist/index.html'));
// });

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// module.exports = router;
//
// var express = require('express');
// var path = require('path');
// var router = express.Router();
//
// // serve angular front end files from root path
// router.use('/', express.static('app', { redirect: false }));
//
// // rewrite virtual urls to angular app to enable refreshing of internal pages
// router.get('*', function (req, res, next) {
//     res.sendFile(path.resolve('app/index.html'));
// });
//
// module.exports = router;
