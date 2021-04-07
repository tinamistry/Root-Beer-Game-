function float() {
   var vanilla=document.getElementById('vanilla').checked;
   var chocolate=document.getElementById('chocolate').checked;
   var coffee=document.getElementById('coffee').checked;
   var barqs=document.getElementById('barqs').checked;
   var aw=document.getElementById('aw').checked;
   var dads=document.getElementById('dads').checked;
   var ibc=document.getElementById('ibc').checked;
   var rootBeer;
   var iceCream;
   if( vanilla==false && chocolate==false && coffee==false) {
      alert('Please select at least one ice cream flavor');
   }
    if(barqs==false && aw==false && dads==false && ibc==false)
   {
      alert('Please select a root beer');
   }
   else{
      recipe()
   }


   function recipe() {
      if (vanilla == true) {
         vanilla = document.getElementById('vanilla').value;
         iceCream=vanilla + ", ";
      }
      else{
         iceCream="";
      }
      if (chocolate == true) {
         chocolate = document.getElementById('chocolate').value;
         iceCream=iceCream + " " + chocolate;
      }
      else{
         iceCream=iceCream+ " ";
      }
      if (coffee == true) {
         coffee = document.getElementById('coffee').value;
         iceCream=iceCream + ", " + coffee + ". ";
      }
      else{
         iceCream=iceCream + ". ";
      }
      if (barqs == true) {
         rootBeer = document.getElementById('barqs').value;
      }
      else if (aw == true) {
         rootBeer = document.getElementById('aw').value;
      }
      else if (dads == true) {
         rootBeer = document.getElementById('dads').value;
      }
      else if (ibc == true) {
         rootBeer = document.getElementById('ibc').value;
      }
      document.getElementById('recipe').style.borderStyle="double";
      document.getElementById('recipe').innerHTML="Recipe: " + "<br><br>" + "In a glass mug, add one scoop of each of these ice creams- " +
          "<br>" + iceCream + "Fill up the mug with " + rootBeer + " root beer. Enjoy!" + "<br><br>";


   }

}

