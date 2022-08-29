var app = require('./app')
var port = process.env.PORT || 3100;
const password = 'Gero5263';
var URL = `mongodb+srv://geronimoGarzon:${password}@cluster0.xrl7p.mongodb.net/?retryWrites=true&w=majority`;

var mongoose = require('mongoose');


(async function connect() {
    try {
        await mongoose.connect(URL);
        console.log('\x1b[36m Connected to MongoDB \x1b[37m');
        app.listen(port, () => {
            console.log(`\x1b[33m Server escuchando en puerto: ${port} \x1b[37m`);
        });
    }
    catch(err) 
    {
        console.log('\x1b[31m Error al conectar con MongoDB \x1b[37m');
    }
})()