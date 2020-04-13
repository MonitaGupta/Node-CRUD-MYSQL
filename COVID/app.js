const express = require('express');
const CONFIG = require('./config/config')

const route = require('./routes/index');
const app = express();
 
app.get('/', function (req, res) {
    res.send({message: 'COVID Quarantine Tracker'})
  })

app.use('/V0', route);

app.listen(CONFIG.port, () => {
    console.log(`listening to port ${CONFIG.port}`)
})

