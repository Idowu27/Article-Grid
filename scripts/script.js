var btn = document.getElementById('btn');
var note = document.getElementsByClassName('notes-box');
var content = document.getElementById('results');

var input = document.getElementById('notes');

var close_btn = document.getElementById('close');

btn.addEventListener('click', function(event){
  var q = input.value;
  var note_list = document.createElement('div');

      note_list.className = 'notes-box';
  content.appendChild(note_list);


   note_list.innerHTML = '<div class="notes-box">' + q + ' <button id="close">Close</button></div>';


});

  close_btn.addEventListener('click', function(event){
  note[0].remove();

});
