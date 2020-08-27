//constante que armazena o mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definindo a model carro
const CarroSchema = mongoose.Schema({
	nome:{
		type: String,
		require: true
	},
	modelo:{
		type: String,
		require:true
	},
	placa:{
		type: String,
		require:true
	},
	cor:{
		type: String
	},
	observacao:{
		type: String
	},
	categoria:{
		type: String,
		require:true
	}

});
//conectando a model CarroSchema a collection carros
mongoose.model('carros', CarroSchema);

// armazena uma referência do CarroSchema
const Celta = mongoose.model('carros');

//criando um carro
new Celta({
	modelo: 'Celta',
	placa: 'TFM-5687',
	cor: 'Roxo',
	observacao: 'Leve arranhão na lateral dianteira',
	categoria: 'Padrão',
}).save().then((err) => {
	console.log('Carro Criado');
}).catch(() => {
	console.log('Erro ao criar Carro' + err);
});

// armazena uma referência do CarroSchema
const Corsa = mongoose.model('carros');

//criando um carro
new Corsa({
	modelo: 'Corsa',
	placa: 'IMJ-6587',
	cor: 'Preto',
	observacao: 'Pintura arranhada no capô',
	categoria: 'Padrão',
}).save().then((err) => {
	console.log('Carro Criado');
}).catch(() => {
	console.log('Erro ao criar Carro' + err);
});