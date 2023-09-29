// three bars toggle animation + menu start
function threeLinesAnimation(x) {
    x.classList.toggle("change");
  }
// three bars toggle animation + menu end

// auto navigation start
let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5){
      counter = 1;
    }
}, 5000);
// auto navigation end
