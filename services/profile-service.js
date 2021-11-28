let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }


    const updateCurrentProfile = (req, res) => {
        const editedProfile = req.body;
        for(const key in editedProfile){
            if(key == 'name'){
                profile['firstName'] = editedProfile['name'];
            }
            else{
                profile[key] = editedProfile[key];
            }
        }
        res.json(profile);
    }

    app.put('/api/profile', updateCurrentProfile);

    app.get('/api/profile', getCurrentProfile);
};