var rangeImg = document.getElementById("range__b-a").max;
var exampleWrap = document.getElementById("example__wrap").offsetWidth;
var rangeInput = document.querySelector(".rangeInput");

var example = function(width) {
  console.log(width);
  if (width >= 768){
    document.getElementById("range__b-a").max = "768";
    document.getElementById("range__b-a").value = 384;
    console.log(rangeImg);
  }
};

example(exampleWrap);

rangeInput.oninput = function() {
  var i = 0;
  var exampleWrap = document.getElementById("example__wrap").offsetWidth;
  i = document.getElementById("range__b-a").value;
  console.log(i);

  if(exampleWrap >=768){
    document.querySelector(".example__before-wrap").style.width = 768 - i + "px";
    document.querySelector(".example__after-wrap").style.width = i + "px";
  }

  if (exampleWrap <=600) {
    if(document.getElementById("range__b-a").value == 1) {
      document.getElementById("before").style.display = "none";
      document.getElementById("after").style.display = "flex";
    }
  if(document.getElementById("range__b-a").value == 0) {
    document.getElementById("before").style.display = "block";
    document.getElementById("after").style.display = "none";
    }
  }
}
