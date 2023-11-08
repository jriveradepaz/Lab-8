function script(){
  var button = document.getElementById('entrybutton');

  function showText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Jonathan Rivera-De Paz: " + textbox.value);
  }

  button.addEventListener('click', showText);
  }
  
window.addEventListener('load', script);