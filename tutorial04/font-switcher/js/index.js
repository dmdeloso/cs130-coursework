const makeBigger = () => {
    var currentFont = document.querySelector(".content").style.fontSize;
    if (currentFont == "1em") {
       document.querySelector(".content").style.fontSize = "2em";
    }
    else{
      document.querySelector(".content").style.fontSize = "3em";
    }

};

const makeSmaller = () => {
  var currentFont = document.querySelector(".content").style.fontSize;
  if (currentFont == "3em") {
     document.querySelector(".content").style.fontSize = "2em";
  }
  else{
    document.querySelector(".content").style.fontSize = "1em";
  }
};


document.querySelector(".a1").onclick = makeBigger;
document.querySelector(".a2").onclick = makeSmaller;
