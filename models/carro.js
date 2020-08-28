//constante que armazena o mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//definindo a model carro
	const Carro = new Schema({
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
		},
		preco:{
			type: Number,
			require:true
		}

	});
	//conectando a model Carro a collection Carros
	mongoose.model('Carros', Carro);

	// armazena uma referência do Carro
	const Carro01 = mongoose.model('Carros');

	//criando um carro
	new Carro01({
		modelo: 'Celta',
		placa: 'IFM-5687',
		cor: 'Roxo',
		observacao: 'Leve arranhão na lateral dianteira',
		categoria: 'Padrão',
		preco: 99.99
	}).save().then((err) => {
		console.log('Carro01 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro01' + err);
	});

	// armazena uma referência do Carro
	const Carro02 = mongoose.model('Carros');

	// //criando um carro
	new Carro02({
		modelo: 'Celta',
		placa: 'IYR-8645',
		cor: 'Azul',
		observacao: 'Carro com 5 anos de idade',
		categoria: 'Padrão',
		preco: 99.99
	}).save().then((err) => {
		console.log('Carro02 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro02' + err);
	});

	// armazena uma referência do Carro
	const Carro03 = mongoose.model('Carros');

	//criando um carro
	new Carro03({
		modelo: 'Corsa',
		placa: 'IUT-8623',
		cor: 'Cinza',
		observacao: 'Pequeno amassado no para-choque',
		categoria: 'Padrão',
		preco: 99.99
	}).save().then((err) => {
		console.log('Carro03 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro03 ' + err);
	});

	// armazena uma referência do Carro
	const Carro04 = mongoose.model('Carros');

	//criando um carro
	new Carro04({
		modelo: 'Corsa',
		placa: 'ILK-8932',
		cor: 'Prata',
		observacao: 'Bancos dianteiros com alguns rasgos',
		categoria: 'Padrão',
		preco: 99.99
	}).save().then((err) => {
		console.log('Carro04 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro04 ' + err);
	});



	// armazena uma referência do Carro
	const Carro05 = mongoose.model('Carros');

	//criando um carro
	new Carro05({
		modelo: 'Palio',
		placa: 'IJS-5936',
		cor: 'Verde Escuro',
		observacao: 'Bancos dianteiros com alguns arranhões',
		categoria: 'Executivo',
		preco: 199.99
	}).save().then((err) => {
		console.log('Carro05 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro05 ' + err);
	});

	// armazena uma referência do Carro
	const Carro06 = mongoose.model('Carros');

	//criando um carro
	new Carro06({
		modelo: 'Palio',
		placa: 'ILP-6372',
		cor: 'Prata',
		observacao: 'Estofado arranhado',
		categoria: 'Executivo',
		preco: 199.99
	}).save().then((err) => {
		console.log('Carro06 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro06' + err);
	});

	// armazena uma referência do Carro
	const Carro07 = mongoose.model('Carros');

	//criando um carro
	new Carro07({
		modelo: 'Mobi',
		placa: 'IOR-6314',
		cor: 'Branco',
		observacao: 'Vidro dianteiro levemente arranhado',
		categoria: 'Executivo',
		preco: 199.99
	}).save().then((err) => {
		console.log('Carro07 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro07' + err);
	});

	// armazena uma referência do Carro
	const Carro08 = mongoose.model('Carros');

	// //criando um carro
	new Carro08({
		modelo: 'Mobi',
		placa: 'IWS-8667',
		cor: 'Branco',
		observacao: 'Espelho retrovisor com alguns arranhões',
		categoria: 'Executivo',
		preco: 199.99
	}).save().then((err) => {
		console.log('Carro08 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro08' + err);
	});

	// armazena uma referência do Carro
	const Carro09 = mongoose.model('Carros');

	//criando um carro
	new Carro09({
		modelo: 'Logan',
		placa: 'IRT-9635',
		cor: 'Azul Escuro',
		observacao: 'Ótimo Estado',
		categoria: 'VIP',
		preco: 350.00
	}).save().then((err) => {
		console.log('Carro09 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro09' + err);
	});

	// armazena uma referência do Carro
	const Carro10 = mongoose.model('Carros');

	//criando um carro
	new Carro10({
		modelo: 'Logan',
		placa: 'IOP-5476',
		cor: 'Preto',
		observacao: 'Ótimo Estado',
		categoria: 'VIP',
		preco: 350.00
	}).save().then((err) => {
		console.log('Carro10 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro10' + err);
	});

	// armazena uma referência do Carro
	const Carro11 = mongoose.model('Carros');

	//criando um carro
	new Carro11({
		modelo: 'Hilux',
		placa: 'ISW-8364',
		cor: 'Vinho',
		observacao: 'Ótimo Estado',
		categoria: 'VIP',
		preco: 350.00
	}).save().then((err) => {
		console.log('Carro11 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro11' + err);
	});

	// armazena uma referência do Carro
	const Carro12 = mongoose.model('Carros');

	//criando um carro
	new Carro12({
		modelo: 'Hilux',
		placa: 'IXC-5736',
		cor: 'Branco',
		observacao: 'Ótimo Estado',
		categoria: 'VIP',
		preco: 350.00
	}).save().then((err) => {
		console.log('Carro12 Criado');
	}).catch(() => {
		console.log('Erro ao criar Carro12' + err);
	});