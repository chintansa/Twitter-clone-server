let tweets = require('../data/tweets.json');

module.exports = (app) => {

    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    const postNewTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
            "logo-image": "https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet => tweet._id !== id);
        res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.stats.likes--;
                } else {
                    tweet.liked = true;
                    tweet.stats.likes++;
                }
                return tweet;
            } else {
                return tweet;
            }


        });
        res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);



    app.post('/api/tweets', postNewTweet);


    app.get('/api/tweets', findAllTweets);
};
