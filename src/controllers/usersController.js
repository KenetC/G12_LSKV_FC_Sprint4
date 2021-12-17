const fs = require('fs');
const path = require('path');

const jsonDB = require('../model/jsonUsersDatabase');
const userModel = jsonDB('usersDataBase');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const usersController = {
    login: function(req,res) {
        return res.render('users/login');
    },
    
    register: function(req,res) {
        return res.render("users/register");
    },

	store: function(req, res, next){
		if (req.file){
			console.log(req.file);
			let aCrear = req.body;
			aCrear.image = req.file.filename;
			let aCrearID = userModel.create(aCrear);
			res.redirect(`/`);
		}else { 
			const error = new Error('Hubo un error intente nuevamente!')
			return next(error)
		}
	},

	list: (req,res)=>{
		const users = userModel.all(); 
		res.render('users/usersList',{users});
	}
}

module.exports = usersController;