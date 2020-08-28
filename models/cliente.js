//constante que armazena o mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definindo o model cliente
const Cliente = new Schema({
	nome:{
		type: String,
		require: true
	},
	cpf:{
		type: Number,
		require:true
	},
	email:{
		type: String,
		require:true
	},
	email:{
		type: String,
		require:true
	},
	telefone:{
		type: Number,
		require:true
	},
	senha:{
		type: String,
		require:true
	},
	dataNasc:{
		type: Date,
		require:true
	}

});
//conectando a model ClienteSchema a collection clientes
mongoose.model('Clientes', 	Cliente);
