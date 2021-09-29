var carta1 = {
    nome: "Shiryu de dragao",
    imagem:
      "http://img.elo7.com.br/product/zoom/2B30956/poster-quadro-shiryu-de-dragao-30x42cm-nerd.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      inteligencia: 5
    }
  };
  
  var carta2 = {
    nome: "Bulbasauro",
    imagem:
      "http://pm1.narvii.com/6223/11335ffde96efad386b23068bb8751d77e26c1ef_00.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      inteligencia: 1
    }
  };
  
  var carta3 = {
    nome: "Darth Vader",
    imagem:
      "https://img.elo7.com.br/product/original/1558FCE/quadro-20-x-30-darth-vader-decoracao.jpg",
    atributos: {
      ataque: 6,
      defesa: 8,
      inteligencia: 9
    }
  };
  
  var carta4 = {
    nome: "Homem de Ferro",
    imagem:
      "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/03/iron-man-1.jpg",
    atributos: {
      ataque: 7,
      defesa: 5,
      inteligencia: 10
    }
  };
  
  var carta5 = {
    nome: "Cj",
    imagem: "https://pbs.twimg.com/media/DjZZLMnW4AAbLv8.jpg",
    atributos: {
      ataque: 10,
      defesa: 7,
      inteligencia: 10
    }
  };
  
  var carta6 = {
    nome: "Ednaldo pereira",
    imagem:
      "https://pbs.twimg.com/profile_images/1293925081542995971/s2la3KS9_400x400.png",
    atributos: {
      ataque: 6,
      defesa: 5,
      inteligencia: 7
    }
  };
  
  var carta7 = {
    nome: "Trevor",
    imagem:
      "https://rggames.com.br/wp-content/uploads/2015/10/trevor-phillips.jpg",
    atributos: {
      ataque: 7,
      defesa: 5,
      inteligencia: 1
    }
  };
  
  var carta8 = {
    nome: "Caveira Vermelha",
    imagem:
      "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2019/12/legiao_ZHIYGdRvipeoAPKEzh14XxynVBtWu_LDUOQTN76qr3.jpg.jpeg",
    atributos: {
      ataque: 8,
      defesa: 6,
      inteligencia: 3
    }
  };
  
  var carta8 = {
    nome: "Superman",
    imagem:
      "http://1.bp.blogspot.com/-cpOGhtCikF8/VO-EkTJjZkI/AAAAAAAAZ4A/COi3U2AopiM/s1600/Superman.jp",
    atributos: {
      ataque: 9,
      defesa: 8,
      inteligencia: 7
    }
  };
  
  var carta9 = {
    nome: "Coringa",
    imagem:
      "https://i.pinimg.com/originals/bc/c6/83/bcc6839b2f076f5e9480701c927e846f.jpg",
    atributos: {
      ataque: 6,
      defesa: 6,
      inteligencia: 4
    }
  };
  
  var carta10 = {
    nome: "Viuva Negra",
    imagem:
      "https://claudia.abril.com.br/wp-content/uploads/2020/01/black-widow.jpg?quality=85&strip=info",
    atributos: {
      ataque: 7,
      defesa: 5,
      inteligencia: 6
    }
  };
  
  var cartas = [
    carta1,
    carta2,
    carta3,
    carta4,
    carta5,
    carta6,
    carta7,
    carta8,
    carta9,
    carta10
  ];
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 10);
    cartaMaquina = cartas[numeroCartaMaquina];
    console.log(cartaMaquina);
    console.log(numeroCartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 10);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 10);
      
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
    
  }
  
  function obtemAtributosSelecionados() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributosSelecionados = obtemAtributosSelecionados();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributosSelecionados] >
      cartaMaquina.atributos[atributosSelecionados]
    ) {
      htmlResultado = "<p class= 'resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributosSelecionados] <
      cartaMaquina.atributos[atributosSelecionados]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;

    //  function exibirCartaMaquina () {
    //    var divCartaMaquina = document.getElementById("carta-maquina");
    //    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;  
    //    var moldura = '<img src= "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height inherit; position: absolute;">';
    // var tagHTML = "<div id='opcoes' class='carta-status'>";
    // var opcoesTexto = "";
    // for (var atributo in cartaMaquina.atributos){
    //   opcoesTexto += "<input type 'radio' name='atributo' value='" + atributo + "'>" + atributo + "" + cartaMaquina.atributos[atributo]+ "<br>";
    //     }
    // var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    // divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
    //}

    //TO-DO CHAMAR EXIBIR CARTA MAQUINA
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        "" +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  // a variavel para o codigo da linha 96 pode ser escrita como divCartaJogador.style.backgroundImage= "url("+ cartaJogador.imagem +")" os dois funciona igualmente mas a primeira forma é mais simples
  