//CARREGANDO MÓDULOS
	//constante que armazena o express
	const express = require ('express');
	//const que recebe a fução do express
	const app = express();
	//constante que armazena o body-parser
	const bodyParser = require ('body-parser');
	//constante que armazena o handlebars
	const handlebars = require('express-handlebars');
	//constante que armazena o mongoose
	const mongoose = require('mongoose');
	//constante que armazena o express-session
	const session = require('express-session');
	//constante que armazena o connect-flash
	const flash = require('connect-flash');
	//chamar o model cliente
	require('./models/cliente');
	//chama a função que passa uma referencia do model para uma const
	const Cliente = mongoose.model('Clientes');
	//chamar o model carro
	require('./models/carro');
	//chama a função que passa uma referencia do model para uma const
	const Carro = mongoose.model('Carros');
	//constante que armazena o passport
	const passport = require('passport');
	//passando o arquivo de confg do auth
	require('./config/auth')(passport)
	//constante que armazena o bcrypt
	const bcrypt = require('bcryptjs');

	//redireciona o bootstrap js
	app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
	//redireciona o bootstrap css
	app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


//CONFIGURAÇÕES

	//session
	app.use(session({
		//cria uma seção
		secret: 'secaotestemoblize',
		resave: true,
		saveUninitialized: true
	}));

	app.use(passport.initialize())
	app.use(passport.session())

	//flash
	app.use(flash());

	//middleware
	app.use((req, res , next) => {
		//variaveis globais
		//msg global de sucesso
		res.locals.success_msg = req.flash('success_msg');
		//msg global de erro
		res.locals.error_msg = req.flash('error_msg');
		res.locals.error = req.flash('error');
		next();
	})

	//body-parser
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());

	//handlebar
	app.engine('handlebars', handlebars({defaultLayout:''}));
	app.set('view engine', 'handlebars');

	//mongoose
	//para evitar alguns erros mongoose
	mongoose.Promise = global.Promise;
	//conectando ao mongoose, e informando qual banco de dados utilizar
	mongoose.connect("mongodb://localhost/testeMoblize", { 
		useNewUrlParser:true,  useUnifiedTopology: true
	}).then(() => {
		console.log('MongoDB Conectado...');
	}).catch((err) =>{
		console.log('Ouve um erro ao conectar ao MongoDB: ' + err);
	});

//ROTAS

	// ROTA DE LOGIN
	app.get('/',(req, res) => {
		 res.render('login');
	}); 

	//rota para a autenticação
	app.post('/login', (req, res, next) => {
		passport.authenticate('local', {
			//se passou na autenticação
			successRedirect: '/listCarros',
			//se não passou na autenticação
			failureRedirect: '/',
			failureFlash: true 
		})(req, res, next)
	})

	//ROTA DE LISTA DE CARROS
	app.get('/listCarros', (req, res) => {
		Carro.find().lean().then((carros) => {
			res.render('listCarros', {carros: carros});
		}).catch((err) => {
			req.flash('error_msg', 'Houve um erro ao listar os carros');
		})
	});

	//ROTA DE INFORMAÇÕES DE UM CARRO
	app.get('/infoCarros/:id', (req, res) => {
		Carro.findOne({_id:req.params.id}).then((carros) => {
			res.render('infoCarros', {carros: carros});
		}).catch((err) => {
			req.flash('error_msg', 'Houve um erro ao exibir as informações');
				res.render('listCarros');
		})
	});

	//ROTA DE ALUGAR CARROS
	app.get('/alugarCarros/:id', function(req, res){
		Carro.findOne({_id:req.params.id}).then((carros) => {
			res.render('alugarCarros', {carros: carros});
		}).catch((err) => {
			req.flash('error_msg', 'Houve um erro ao exibir as informações');
			res.render('infoCarros');
		})
	});

	//ROTA PARA RESERVAR CARRO
	app.post('/resCarros', (req, res) => {
		Carro.findOne({_id:req.body.id}).then((carros) => {

			carros.reserva = "1";
			carros.reserva = 1;
			carros.reserva = req.body.reserva;

			carros.save().then(() => {
				req.flash('success_msg', 'Carro reservado com sucesso!');
				res.redirect('resCarros');
			}).catch((err) => {
				req.flash('error_msg', 'Houve um erro ao reservar o carro');
				res.redirect('alugarCarros');

			})

			
		}).catch((err) => {
			console.log('Houve um erro ao reservar o carro' + err);
			req.flash('error_msg', 'Houve um erro ao reservar o carro');
				res.render('infoCarros');
		})
	})

	// app.get('/pesquisar/:cor', (req, res) => {
	// 	Carro.findOne({cor:req.params.cor}).then((carros) => {
	// 		res.render('listCarros', {carros: carros});
	// 	}).catch((err) => {
	// 		req.flash('error_msg', 'Cor não encontrada');
	// 			res.render('listCarros');
	// 	})
	// });
	

	//ROTA DO FORMULARIO DE CLIENTES
	app.get('/cadClientes', (req, res) =>{
		res.render('cadClientes');
	});

	//ROTA DE CADASTRO DE CLIENTES
	app.post('/cadClientes/novo', (req, res) =>{
		//array para erros de validação
		var erros = []

		if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null || req.body.nome == Number){
			//armazena o erro na array
			erros.push({texto: 'Nome inválido'});
		}
		if(!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null || req.body.cpf == String){
			//armazena o erro na array
			erros.push({texto: 'CPF inválido'});
		}
		if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
			//armazena o erro na array
			erros.push({texto: 'Email inválido'});
		}
		if(!req.body.telefone || typeof req.body.telefone == undefined || req.body.telefone == null || req.body.telefone == String){
			//armazena o erro na array
			erros.push({texto: 'Telefone inválido'});
		}
		if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
			//armazena o erro na array
			erros.push({texto: 'Senha inválida'});
		}
		if(!req.body.dataNasc || typeof req.body.dataNasc == undefined || req.body.dataNasc == null){
			//armazena o erro na array
			erros.push({texto: 'Datade Nascimento inválida'});
		}

		if(erros.length > 0 ){
			res.render('cadClientes', {erros: erros})
		}else{
			//retirar os caracteres especiais do cpf
		const cpfT = (req.body.cpf);
		const cpf3P = cpfT.replace("-", "");
		const cpf1P = cpf3P.replace(".", "");
		const cpf = cpf1P.replace(".", "");

		//retirar os caracteres especiais do telefone
		const telefoneT = (req.body.telefone);
		const telefoneP1 = telefoneT.replace("-", "");
		const telefoneP2 = telefoneP1.replace("(", "");
		const telefoneE = telefoneP2.replace(")", "");
		const telefone = telefoneE.replace(" ", "");

		const novoCliente = new Cliente({
			nome: req.body.nome,
			cpf: cpf,
			email: req.body.email,
			telefone: telefone,
			senha: req.body.senha,
			dataNasc: req.body.dataNasc
		})

		bcrypt.genSalt(10, (erro, salt) => {
			bcrypt.hash(novoCliente.senha, salt, (erro, hash) => {
				if(erro){
					req.flash('error_msg', 'Houve um erro ao salvar o cliente')
					res.redirect('cadClientes')
				}
				novoCliente.senha = hash
			})

		})
		

		novoCliente.save().then(() =>{
			req.flash('success_msg', 'Cliente cadastrado com suceso!')
			res.redirect('/')
		}).catch((err) => {
			req.flash('error_msg', 'Ouve um erro ao cadastrar o cliente')
			console.log('Erro ao salvar Cliente ' + err);
		});
		}
	});

//OUTROS
	//configurando porta e servidor
	const PORT = 8080;
	app.listen(PORT, () => {
		console.log("Servidor Rodando na porta 8080! ");
	});

