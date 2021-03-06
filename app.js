
let express = require('express')

let app = express();
let apiRoutes = require("./Routes")

var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Hello World with Express'));
app.use('/api', apiRoutes)

app.listen(port, function () {
     console.log("Running the app on port " + port);
});
