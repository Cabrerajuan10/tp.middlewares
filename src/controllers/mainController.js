module.exports = {
    index : (req,res) => res.render('index'),
    admin : (req,res) => res.render('admin', {user: req.query.user}),
    login : (req,res) => res.render('login'),
    noEntry : (req,res) => res.render('noEntry')
}