//carregando a estrategia local
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../models/cliente');
const Cliente = mongoose.model('Clientes');

module.exports = function(passport){

	//configurar sistema de autenticação
	passport.use(new localStrategy({usernameField: 'email', passwordField: 'senha'}, (email, senha, done) => {
		Cliente.findOne({email: email}).then((cliente) => {
			if(!cliente){
				return done(null, false, {message: 'Esta conta não existe'})
			}

			bcrypt.compare(senha, cliente.senha, (erro, batem) => {

				if(batem){
					return done(null, cliente)

				}else{
					return done(null, false, {message: 'Senha incorreta'})
				}
			})
		})
	}))

	passport.serializeUser((cliente, done) => {
		done(null, cliente.id)

	})

	passport.deserializeUser((id, done) => {
		Cliente.findById(id, (err, cliente) => {
			done(err, cliente)
		})
	})

}