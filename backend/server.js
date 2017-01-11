var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({extended: true}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

//GET to Home Page
app.get('/', function (req, res) {
    res.send('Home Page');
})

app.get('/cards', function (req, res) {

    var input = req.query.date;

    //asynchronous file reading
    fs.readFile('data/meetingRoomList.json', 'utf8', handleFile);

    function handleFile(err, data) {
        if (err) {
            throw err;
            console.log('Error: ' + err);
            return;
        }
        var meetingList = JSON.parse(data);

        var filteredList = [];
        var date = input;
        for (var i = 0; i < meetingList.length; i++) {
            if (meetingList[i].date == date) {
                filteredList.push(meetingList[i]);
            }
        }

        res.json(filteredList);
    }
})

app.post('/cards', function (req, res) {
    var input = req.body;
    input.id = Date.now();

    fs.readFile('data/meetingRoomList.json', 'utf8', function (err, content) {
        if (err) throw err;
        var parseJson = JSON.parse(content);

        parseJson.push(req.body);

        fs.writeFile('data/meetingRoomList.json', JSON.stringify(parseJson), function (err) {
            if (err) throw err;
            return res.json(input);
        })

    })
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080 ...');
})