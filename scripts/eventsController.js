//Controller for Get and Save Method

//Nodes file system object
var fs = require('fs');

//Get Method
module.exports.get = function(request, response)
{
    var event= fs.readFileSync('app/data/event/' + request.params.id + '.json', 'utf8');
    response.send(event);
}

module.exports.save = function(request, response)
{
    var event = request.body;
    fs.writeFileSync('app/data/event/' + request.params.id + '.json', JSON.stringify(event));
    response.send(event);
}

