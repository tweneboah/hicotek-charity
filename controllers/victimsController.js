
//GET VICTIM FORM
module.exports.getVictimForm = (req, res) => {
    res.render('victimForm');
}

//VICTIM POST ROUTE

module.exports.postVictimRequest = (req, res) => {
    res.send('POSTED')
}