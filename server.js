const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

require('./controllers/burgers_controller')(app);

const routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});