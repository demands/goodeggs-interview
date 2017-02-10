var fakeEggs = require('fake-eggs');
var express = require('express');
var _ = require('lodash');

var peopleIds = _.times(150);
var people = _.keyBy(peopleIds.map(function (id) {
  var friendIds = _.sampleSize(peopleIds, _.sample(_.times(10)));
  return _.assign({id: id, friends: friendIds}, fakeEggs.customer());
}), 'id');

var app = express();

app.get('/:id', function (req, res) {
  if (req.params.id === '500') {
    res.status(500);
    res.send("Server error");
    return;
  }
  
  if (req.params.id === '504') {
    /* do nothing */
    return;
  }
  
  var person = people[req.params.id];
  
  if (person) {
    res.json(person);
    return;
  }
  res.sendStatus(404);
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('server listening on port ' + port);
});
