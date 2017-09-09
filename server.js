const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var path = require('path');

const PORT = process.env.PORT || 8090;

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./controllers/burgers_controller')(app);

const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});