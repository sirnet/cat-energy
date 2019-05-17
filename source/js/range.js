
var rangeImg = document.getElementById("range__b-a").max;
var exampleWrap = document.getElementById("example__wrap").offsetWidth;

var rangeInput = document.querySelector(".rangeInput");

var example = function(width) {
  console.log(width);
  if (width >= 768){
    document.getElementById("range__b-a").max = "677";
    console.log(rangeImg);
  }
};

example(exampleWrap);

rangeInput.oninput = function() {
  if (exampleWrap <=768)
  if(document.getElementById("range__b-a").value == 1) {
    document.getElementById("before").style.display = "none";
    document.getElementById("after").style.display = "block";
  }
  if(document.getElementById("range__b-a").value == 0) {
    document.getElementById("before").style.display = "block";
    document.getElementById("after").style.display = "none";
  }

}

