$(function() {
    var name = $('#name').val();
    alert(name);
    $('#messages').append("<li class ='message-mel'>"+greeting(name)+"</li>");
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
