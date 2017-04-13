var name ;/*$('#name').val(); */ // "Gabriel";
var token ;//{{ token }};


$( function() {
    $.ajax({
        url: '/api/user',
        method: 'post',
    }).done(function(user) {
        console.log(user);
        name = user.first_name;
        token = user.access_token;
    });

    $('#messages').append("<li class ='message-mel'>"+greeting(name)+"</li>");
    console.log("teste: "+token);
});

$('#submit').click(function() {
//  var name = $('#name').val();
  var msgUser = $('#message-user').val();
  var answer = answerQuestion(msgUser, name);
  $('#messages').append("<li class='message-user'>"+ msgUser +"</li>");
  $('#messages').append("<li class='message-mel'>"+ answer +"</li>");
  if(msgUser === "Legal, adoro comprar pela internet! Qual produto você precisa?" || "Qual produto você deseja então?") {
    // aqui vem a chamada do produto e listagem dos 3 com menor preço
    // pegaProdutosPrimeiraPergunta
    // pegarProdutosSegundaPergunta
  }
  if(msgUser === "Quer calcular o frete?") {
    // função que  calcula o frete (optativo) (Faço a menor ideia de como)
  }
});


$('#selected-product').click(function() {

})


function answerQuestion(question, name) {
  alert(question+" "+ name);
  if( /^oi|ola|olá|eae|e aí|e ae/i.test(question)) {
    return "Oi "+ name + ", como posso ajudar?";
  }
  else if (/^compra|acha|consulta|preço/i.test(question)) {
    return "Legal, adoro comprar pela internet! Qual produto você precisa?";
  }
  else if (/^não|nao/i.test(question)){
    return "Qual produto você deseja então?";
  }
  else if(question === "image") {
    return "Quer calcular o frete?";
  }
  else {
    return "Precisa ser mais claro, ainda estou em construção, me desculpe.";
  }
}

function AnswerQuestion(question, name) {

}



/*  $('body').append(answerQuestion($('#message').val()));
});

function answerQuestion(keyword) {
  alert(keyword);
  searchJSON(keyword);
}

function searchJSON(keyword) {
  var parsedObjetc = JSON.parse('keyAndAns.json');
  alert(parsedObject);
}
*/
