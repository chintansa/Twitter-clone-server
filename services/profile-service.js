let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    

    const editProfile = (req, res) => {
        console.log("in edit profile server")
        const editedProfile = req.body;
        for(const key in editedProfile){
            if(key == 'name'){
                profile['firstName'] = editedProfile['name'].split(" ")[0];
                profile['lastName'] = editedProfile['name'].split(" ")[1];
            }
            else{
                profile[key] = editedProfile[key];
            }
        }
        res.sendStatus(200);
        res.json(profile);
    }
    app.put('/api/profile',editProfile);
   

    app.get('/api/profile', getCurrentProfile);
};


