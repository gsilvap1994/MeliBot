var user; /*$('#name').val(); */ // "Gabriel";
var token; //{{ token }};
var session;

// on ready
$( function() {
  $.ajax({
        url: '/api/user',
        method: 'get'
    }).done(function(user) {
        console.log(user);
        user = user;
        $('#name').html(user.first_name);
        $('#messages').append("<li class ='message-mel'>"+greeting(user.first_name)+"</li>");
    });

  $.ajax({
      url: '/api/token',
      method: 'post'
    }).done(function(tokens){
      console.log(tokens);
      token = tokens;
    });

    session = 'main';
});

// chama o controller quando o usuário clica em enviar
$('#submit').click(function() {
//  var name = $('#name').val();
  mainController();
  $('#message-user').val("");
});

// chama o controller quando o usuário pressiona o enter
$('#message-user').keypress(function(e) {
    if(e.which == 13) {
        mainController();
        $('#message-user').val("");
        return false;
    }
});

// controller principal do bot
function mainController() {

  var msgUser = $('#message-user').val();
  $('#messages').append("<li class='message-user'>"+ msgUser +"</li>");

  switch(session){
    case 'main':
      answerQuestion(msgUser);
      break;
    case 'search':
      searchProduct(msgUser);
      break;
    case 'ship':
      shipOrEnd(msgUser);
      break;
  }
}

// menu para responder pergunta
function answerQuestion(question) {
  //alert(question+" "+ name);
  if( /^oi|ola|olá|eae|e aí|e ae/i.test(question)) {
    print("Oi " +  ", como posso ajudar?");
  }
  else if (/^compra|acha|consulta|preço/i.test(question)) {
    session = 'search';
    print("Legal, adoro comprar pela internet! Qual produto você precisa?");
  }
  else if (/^não|nao/i.test(question)){
    print("Qual produto você deseja então?");
  }
  else {
    print("Precisa ser mais claro, ainda estou em construção, me desculpe.");
  }
}

// menu para buscar produto
function searchProduct(question) {
  $.ajax({
    url: 'https://api.mercadolibre.com/sites/MLB/search?q='+question.replace(/ /g, '+')+'&limit=3&access_token='+tokens.access_token,
    method: 'get'
  }).done(function(product) {
    product.results.forEach(function(result) {
      var _product = '<a href="#" class="selected-product"><span class='+result.seller_address.zip_code+'>'+result.title+'</span></a>';
      print(_product);
    });
  });
}

// menu para calcular o frete ou finalizar a compra
function shipOrEnd(question){
  $('.selected-product').click(function() {
    var zip_code_product = $(this).children('span').attr('class').toString();
    print("Deseja saber o frete?");
    if(/^sim|ok|desejo|quero|bem/i.test()) {
      .ajax({
        url: 'https://api.mercadolibre.com/sites/MLa/shipping_options?zip_code_from='+zip_code_product+'&to='user.zip_code,
        method:'get'
      }).done(function(shipping){
        shipping.options.forEach(function(option) {
          print(option.name+" Custo: "+option.cost+" R$");
        });
      });
    }
  });
}

// imprime na tela
function print(answer) {
  $('#messages').append("<li class='message-mel'>"+ answer +"</li>");
}
