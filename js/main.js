$(document).ready(function() {

  var arrayRandom = [];

  for(var i=0; i < 5; i++){

    var numberRandom = getRandom(1, 100);
    alert(numberRandom);
    arrayRandom.push(numberRandom);
  }
  console.log(arrayRandom)

  var arrayMatches = [];

  if(arrayRandom.length == 5){

    var myTimer = setInterval(function(){

      for(var j=0; j < arrayRandom.length; j++){

          var numberMatches = prompt("inserisci il numero in posizione " + (parseInt(j)+1));

            if(numberMatches == parseInt(arrayRandom[j]) && arrayMatches.length < 4){

              alert("Giusto, puoi continuare!")
              arrayMatches.push(numberMatches);

            } else if(arrayMatches.length == 4 && numberMatches == parseInt(arrayRandom[j])){

              alert("Complimenti, hai vinto!");
            } else {
              alert("numero non corretto, hai perso! ne hai indovinate: " + arrayMatches.length);
              j = arrayRandom.length;
            }


      }
      if(arrayMatches.length = arrayRandom.length ){
        clearInterval(myTimer);
      }
    }, 30000);
  }
});
