//constante que armazena o express
const express = require ('express');
const app = express();

//chama o arquivo model
// require("../models/carro");
//chama a função (mongoose.model("Carros")) q vai passar uma referencia do model para a const
// const Usuario = mongoose.model("Carros");

//constante que armazena o mongoose
const mongoose = require('mongoose');

//redireciona o bootstrap js
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
//redireciona o bootstrap css
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//CONFIGURANDO O MONGOOSE
//para evitar alguns erros mongoose
mongoose.Promise = global.Promise;

//conectando ao mongoose, e informando qual banco de dados utilizar
mongoose.connect("mongodb://localhost/testeMobilize", { 
	useNewUrlParser:true,  useUnifiedTopology: true
}).then(() => {
	console.log('MongoDB Conectado...');
}).catch((err) =>{
	console.log('Ouve um erro ao conectar ao MongoDB: ' + err);
});


const PORT = 8080;
	app.listen(PORT, () => {
	    console.log("Servidor Rodando na porta 8080! ");
	});
	
app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/login.html');
});

// app.get('/cadClientes', function(req, res){
// 	res.sendFile(__dirname + '/views/cadClientes.html');
// });

app.get('/listCarros', function(req, res){
	res.sendFile(__dirname + '/views/listCarros.html');
});

// app.get('/infoCarros', function(req, res){
// 	res.sendFile(__dirname + '/views/infoCarros.html');
// });

// app.get('/alugarCarros', function(req, res){
// 	res.sendFile(__dirname + '/views/alugarCarros.html');
// });

// app.get('/resCarros', function(req, res){
// 	res.sendFile(__dirname + '/views/resCarros.html');
// });


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
const Carro01 = mongoose.model('carros');

//criando um carro
new Carro01({
	modelo: 'Celta',
	placa: 'IFM-5687',
	cor: 'Roxo',
	observacao: 'Leve arranhão na lateral dianteira',
	categoria: 'Padrão',
}).save().then((err) => {
	console.log('Carro01 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro01' + err);
});

// armazena uma referência do CarroSchema
const Carro02 = mongoose.model('carros');

//criando um carro
new Carro02({
	modelo: 'Celta',
	placa: 'IYR-8645',
	cor: 'Azul',
	observacao: 'Carro com 5 anos de idade',
	categoria: 'Padrão',
}).save().then((err) => {
	console.log('Carro02 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro02' + err);
});

// armazena uma referência do CarroSchema
const Carro03 = mongoose.model('carros');

//criando um carro
new Carro03({
	modelo: 'Corsa',
	placa: 'IUT-8623',
	cor: 'Cinza',
	observacao: 'Pequeno amassado no para-choque',
	categoria: 'Padrão',
}).save().then((err) => {
	console.log('Carro03 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro03 ' + err);
});

// armazena uma referência do CarroSchema
const Carro04 = mongoose.model('carros');

//criando um carro
new Carro04({
	modelo: 'Corsa',
	placa: 'ILK-8932',
	cor: 'Prata',
	observacao: 'Bancos dianteiros com alguns rasgos',
	categoria: 'Padrão',
}).save().then((err) => {
	console.log('Carro04 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro04 ' + err);
});



// armazena uma referência do CarroSchema
const Carro05 = mongoose.model('carros');

//criando um carro
new Carro05({
	modelo: 'Palio',
	placa: 'IJS-5936',
	cor: 'Verde Escuro',
	observacao: 'Bancos dianteiros com alguns arranhões',
	categoria: 'Executivo',
}).save().then((err) => {
	console.log('Carro05 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro05 ' + err);
});

// armazena uma referência do CarroSchema
const Carro06 = mongoose.model('carros');

//criando um carro
new Carro06({
	modelo: 'Palio',
	placa: 'ILP-6372',
	cor: 'Prata',
	observacao: 'Estofado arranhado',
	categoria: 'Executivo',
}).save().then((err) => {
	console.log('Carro06 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro06' + err);
});

// armazena uma referência do CarroSchema
const Carro07 = mongoose.model('carros');

//criando um carro
new Carro07({
	modelo: 'Mobi',
	placa: 'IOR-6314',
	cor: 'Branco',
	observacao: 'Vidro dianteiro levemente arranhado',
	categoria: 'Executivo',
}).save().then((err) => {
	console.log('Carro07 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro07' + err);
});

// armazena uma referência do CarroSchema
const Carro08 = mongoose.model('carros');

//criando um carro
new Carro08({
	modelo: 'Mobi',
	placa: 'IWS-8667',
	cor: 'Branco',
	observacao: 'Espelho retrovisor com alguns arranhões',
	categoria: 'Executivo',
}).save().then((err) => {
	console.log('Carro08 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro08' + err);
});

// armazena uma referência do CarroSchema
const Carro09 = mongoose.model('carros');

//criando um carro
new Carro09({
	modelo: 'Logan',
	placa: 'IRT-9635',
	cor: 'Azul Escuro',
	observacao: 'Ótimo Estado',
	categoria: 'VIP',
}).save().then((err) => {
	console.log('Carro09 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro09' + err);
});

// armazena uma referência do CarroSchema
const Carro10 = mongoose.model('carros');

//criando um carro
new Carro10({
	modelo: 'Logan',
	placa: 'IOP-5476',
	cor: 'Preto',
	observacao: 'Ótimo Estado',
	categoria: 'VIP',
}).save().then((err) => {
	console.log('Carro10 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro10' + err);
});

// armazena uma referência do CarroSchema
const Carro11 = mongoose.model('carros');

//criando um carro
new Carro11({
	modelo: 'Hilux',
	placa: 'ISW-8364',
	cor: 'Vinho',
	observacao: 'Ótimo Estado',
	categoria: 'VIP',
}).save().then((err) => {
	console.log('Carro11 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro11' + err);
});

// armazena uma referência do CarroSchema
const Carro12 = mongoose.model('carros');

//criando um carro
new Carro12({
	modelo: 'Hilux',
	placa: 'IXC-5736',
	cor: 'Branco',
	observacao: 'Ótimo Estado',
	categoria: 'VIP',
}).save().then((err) => {
	console.log('Carro12 Criado');
}).catch(() => {
	console.log('Erro ao criar Carro12' + err);
});





//definindo o model cliente
const ClienteSchema = mongoose.Schema({
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
mongoose.model('clientes', 	ClienteSchema);
