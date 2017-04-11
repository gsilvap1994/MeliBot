$(function() {
    var name = $('#name').val();
    alert(name);
    $('#messages').append("<li class ='message-mel'>"+greeting(name)+"</li>");
});

$('#submit').click(function(){
  var msgUser = $('#message-user').val();
  $('#messages').append("<li class='message-user'>"+ msgUser +"</li>");
});


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
