const dao = require('./tweet-dao');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        dao.findAllTweets()
            .then(tweets => res.json(tweets));
          
    }
    app.get('/rest/tweets', findAllTweets);

    const createTweet = (req, res) =>{
        dao.createTweet(req.body)
            .then((insertedTweet) => res.json(insertedTweet));
    }
    app.post('/rest/tweets', createTweet);

    const deleteTweet = (req, res) => {
        dao.deleteTweet(req.params.id)
            .then((status) => res.send(status));
    }

    app.delete('/rest/tweets/:id', deleteTweet);

    const likeTweet = (req,res) =>
    
    dao.likeTweet(req.params.id,req.body)
        .then(status => res.send(status));

    app.put('/rest/tweets/:id/liked', likeTweet);
};








