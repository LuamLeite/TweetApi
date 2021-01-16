var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);
console.log("Funcionando");

var params = {
  q: 'Hilda',
  count: 100
}

T.get('search/tweets', params, gotData);
function gotData(err, data, response){
  var tweets = data.statuses;
  for (var i = 0; i< tweets.length; i++)
  {
    console.log(tweets[i].text);
  }

  var tweet = {
    status: '#codingrainbow! from node.js 2'
  }
T.post('statuses/update', tweet, tweeted);
};

function tweeted(err, data, response)
{
  if(err){
  console.log('//////////////////////////////////////////////////DATA////////////////////////////////////////', data);
  }
  else{
    console.log("Something else");
  }
}
//get, post, stream