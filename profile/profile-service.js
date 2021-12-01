const dao = require('./profile-dao');

module.exports = (app) => {
    const findAllProfile = (req, res) =>
        dao.findAllProfile()
            .then(profile => res.json(profile));
    app.get("/rest/profile", findAllProfile);

    const findProfileById = (req, res) =>
        dao.findProfileById(req.params.id)
            .then(profile => res.json(profile));
    app.get("/rest/profile/:id", findProfileById);

    const updateProfile = (req,res) => {
        dao.updateProfile(req.params.id,req.body)
            .then(status => res.send(status));
    }
    app.put("/rest/profile/:id",updateProfile);

};




