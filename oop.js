function Pessoa(nomeCompleto, corFavorita){
	this.nome = nomeCompleto;
	this.cor =corFavorita;
	this.saudacao = function() {
		console.log("Olá o meu nome é " + this.nome + " e a minha cor favorita é " + this.cor + ".");
	}
}

//O utilizador pode indicar o seu nome e a sua cor favorita sem ter de aceder ao código
var sujeito = new Pessoa(prompt("Qual o teu nome completo?"),prompt("Qual a tua cor favorita?"));
sujeito.saudacao();

var daniel = new Pessoa("Daniel Serrano", "vermelho");
daniel.saudacao();
