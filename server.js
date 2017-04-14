// server.js
const express = require('express');
const app = express();
const router = express.Router();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// serve angular front end files from root path
// router.use('/', express.static('dist', { redirect: false }));

// rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function (req, res, next) {
    res.sendFile(path.resolve('dist/index.html'));
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

module.exports = router;
