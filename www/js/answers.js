/*$(function() {
    alert("Olá Helisson, como posso te ajudar?");
    $.getJSON("keyAndAns.json", function(json) {
      console.log(json);
    });
});
*/

$('#send').on('click', function(){
  $('body').append(answerQuestion($('#message').val()));
});

function answerQuestion(keyword) {
  alert(keyword);
  searchJSON(keyword);
}

function searchJSON(keyword) {
  var parsedObjetc = JSON.parse('keyAndAns.json');
  alert(parsedObject);
}
