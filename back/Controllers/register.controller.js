const Register = require('../Models/register');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);

exports.creerRegister = (req, res) => {

    if (!req.body.nom) {
        return res.status(400).send({
            message: "le contenu ne peut pas être vide"
        });
    }
    var id;
    Register.find()
        .then( test => {
    if (test.length == 0) {
        id = 0;
    } else {
        id = parseInt(test[test.length - 1].id) + 1
    }

    // Pour Hasher le mot de passe 
    var hash = bcrypt.hashSync(req.body.password, salt);

    const register = new Register({
        _id: id,
        nom: req.body.nom,
        email: req.body.email,
        password: hash
    });

    register.save()
        .then(data => {
            res.send(data);
            console.log(data);    
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la création du profil."
            });
        });

    })
};


exports.findAll = (req, res) => {
    Register.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur est survenue lors de la récupération des notes."
            });
        });
};

exports.login = (req, res) => {
    Register.find() 
        .then(user =>{
            const login = new Register({
                email: req.body.email,
                password: req.body.password
            });
                //var r = false;
            for(let i = 0; i<user.length; i++){
                if(( user[i].email == login.email) && bcrypt.compareSync(req.body.password, user[i].password)){
                    // r = true;
                    res.send('Bienvenue sur l\'administrateur')
                    // return res.redirect('http://localhost:3000/admin');
                    
                }
              
            }
            

        }).catch(err=>{
            res.status(500).send({
                message: err.message || "mot de pass non"
            });
        })
        
  };


