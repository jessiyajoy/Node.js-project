const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
    //const expressHbs = require('express-handlebars');

const app = express();
const errorController = require('./controllers/error');

app.set('view engine', 'ejs');
// app.engine(
//     'hbs',
//     expressHbs({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     }));
// app.set('view engine', 'hbs');
//app.set('view engine', 'pug');

app.set('views', 'views')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404page)

app.listen(3000);