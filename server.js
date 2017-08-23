const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride('_method'));

require('./controllers/burgers_controller')(app);

//Took this line from the cats app.  Not exactly sure what it does or why it's necessary.  TAs?
// app.use("/", routes);

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});