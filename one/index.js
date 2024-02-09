const express = require('express'); // import express module
const cors = require('cors'); // import cors module

const app = express();

const db = require('./app/model/init.js');
const filler = require('./fill.js')

db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Synced db.');
    console.log('============================================================================ \n');
    filler.run(); // fill db some data
  })
  .catch((err) => {
    console.log(`Failed to sync db: ${err.message}`);
  });

const corsOptions = { origin: 'http://localhost:8090' }; // set origin

app.use(cors(corsOptions));

app.use(express.json()); // parse requests of content-type - application/json

app.use(express.urlencoded({ // parse requests of content-type - application/x-www-form-urlencoded
  extended: true,
}));

require('./app/route/tag_route.js')(app);
require('./app/route/toy_car_route.js')(app);
require('./app/route/lamp_route.js')(app);
require('./app/route/chocolate_bar_route.js')(app);
require('./app/route/main_route.js')(app);

const PORT = process.env.PORT || '8080'; // set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
