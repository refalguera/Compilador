var Tabela = {
	//Armazenará os tipos dos identificadores
	tipos: new Object(),
	//Palavras reservadas e identificadores
	identificadores: ["AND","DOWNTO","IN","PACKED","TO",
				"ARRAY","ELSE","INLINE","PROCEDURE","TYPE",
				"ASM","END","INTERFACE","PROGRAM","UNIT",
				"BEGIN","FILE","LABEL","RECORD","UNTIL",
				"CASE","FOR","MOD","REPEAT","UNTIL",
				"CONST","FOWARD","NIL","SET","USES",
				"CONSTRUCTOR","FUNCTION","NOT","SHL","VAR",
				"DESTRUCTOR","GOTO","OBJECT","SHR","WHILE",
				"DIV","IF","OF","STRING","WITH",
				"DO","IMPLEMENTATION","OR","THEN","XOR"],
	//Existem 50 palavras reservadas colocadas na inicialização de "identificadores"
	
	//Retorna se é palavra reservada do Pascal (Retorna true caso seja, se não, retorna false)
	ehPascal: function(nomeIdentificador) {
			nomeIdentificador = nomeIdentificador.toUpperCase();
			var ehp = this.identificadores.indexOf(nomeIdentificador);
			if (ehp == -1 || ehp >=50) 
				return false; 
				//Se -1 não foi adicionado a tabela ainda, se for maior que 50, o indice se refere a um identificador criado durante execução
			return true; 
			//Valores entre com indice entre 0 e 49 se referem as palavras reservadas já definidas
		},

	//Retorna a ID correspondente a um identificador e caso não haja um o mesmo é criado e retornado
	pegarId: function(nomeIdentificador) {
			nomeIdentificador = nomeIdentificador.toUpperCase();
			var i = this.identificadores.indexOf(nomeIdentificador);
			if (i != -1) return i;  					         	//Retorna a ID
			this.identificadores.push(nomeIdentificador);		//Adiciona o identificador
			return this.identificadores.length - 1;		  		//Retorna a ID gerada
		},
	
	//Atribui um tipo especifico para um identificador, como identificador de função, de constante, de procedimento
	defineTipo: function (nomeIdentificador, tipo){
			this.tipos[this.pegarId(nomeIdentificador)]=tipo;
		},
	
	//Retorna o tipo do identificador 
	retornaTipo: function (token){
        if (token.tipo == 'id') {
            return this.tipos[this.pegarId(token.valor)];
        } else {
            return token.tipo;
        }
	}
}


module.exports = Tabela;
