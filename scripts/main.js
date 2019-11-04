

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction3() {
  var dots = document.getElementById("dots3");
  var moreText = document.getElementById("more3");
  var btnText = document.getElementById("myBtn3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction4() {
  var dots = document.getElementById("dots4");
  var moreText = document.getElementById("more4");
  var btnText = document.getElementById("myBtn4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function myFunction5() {
  var dots = document.getElementById("dots5");
  var moreText = document.getElementById("more5");
  var btnText = document.getElementById("myBtn5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}



// START OF GSAP ANIMATIONS

TweenMax.set(".hex",{transofrmOrigin: "center center", xPercent:"100%",yPercent:"100%"});
TweenMax.set(".svgtext",{opacity:0});

var x = 0.4;
var entering = 1.8;
var unfolding = 0.4;
var y = 0.3;
var s = 0.1;
var hex = document.querySelectorAll("hex");
var e = document.getElementById("e");
var d = document.getElementById("d");
var i = document.getElementById("i");
var p = document.getElementById("p");
var t = document.getElementById("t");


function entrance() {

  var entrance = new TimelineMax();

  entrance
    .fromTo(".hex", entering, {scale:0, opacity:0.5}, {scale:1, opacity: 0.5, ease:Power2.easeOut})
    .from("#e", entering, {xPercent:"50%", y:"100%"}, "-=entering")
    .from("#d", entering, {xPercent:"75%", y:"100%"}, "-=entering")
    .from("#i", entering, {xPercent:"100%", y:"100%"}, "-=entering")
    .from("#p", entering, {xPercent:"125%", y:"100%"}, "-=entering")
    .from("#t", entering, {xPercent:"150%", y:"100%"}, "-=entering");
  return entrance;
}


function unfold() {

var unfold = new TimelineMax({yoyo:true, repeat: 1, ease: Power2.easeIn});

  unfold
      .from(".hex", x, {opacity:0.5})
      .to("#e", x, {rotation:0}, "-=x")
      .to("#d", x, {rotation:-10}, "-=x")
      .to("#i", x, {rotation:-20}, "-=x")
      .to("#p", x, {rotation:-30}, "-=x")
      .to("#t", x, {rotation:-40}, "-=x");
  return unfold;
}


function distribute() {

  var distribute = new TimelineMax();
  distribute
       .to(".svgtext", y, {opacity:1})
       .to(".hex", y-0.1, {opacity: 1, rotation: 0, scale:1, ease:Power2.easeOut}, "-=y")
       .to("#e", y, {x:-125}, "-=y")
       .to("#d", y, {y:-125}, "-=y")
       .to("#i", y, {x:125}, "-=y")
       .to("#p", y, {x:250, y:125}, "-=y")
       .to("#t", y, {x:125, y:250}, "-=y");
  return distribute;

}

var bubble = 0.1;

function bubbling() {

var bubbling = new TimelineMax({yoyo:true, repeat: -1, ease: Power2.easeIn});

  bubbling
      .to("#e", bubble, {scale:1.1});
  return bubbling;
}



var master = new TimelineMax();

master
      .add(entrance())
      .add(unfold(), "-=0.4")
      .add(distribute(), "-=0.05");
      // .add(bubbling(), "+=1");




      var interactime = 0.25;
      var tl = new TimelineMax({paused: true, reversed: true, ease:Back.easeOut});
      tl
      .to("#e", interactime, {scale:1.3, ease:Back.easeOut})
      .to(".etxt", interactime, {x:-76, y: 8, rotation: -60, scale:1}, "-=interactime")
      .to(".etxt", interactime, {css:{fill:"#7699E6"}}, "-=interactime")
      .from(".hiddentxte", 0.1, {yPercent: 150, opacity:0, autoAlpha:1, display:"none", ease:Power0.easeInOut}, "-=0.2");

      e.addEventListener('click', interact);
        function interact() {
          tl.reversed() ? tl.play() : tl.reverse();
        }



      var tl2 = new TimelineMax({paused: true, reversed: true, ease:Back.easeOut});
      tl2
      .to("#d", interactime, {scale:1.3, ease:Back.easeOut})
      .to(".dtxt", interactime, {x:-94, y: 7, rotation: -60, scale:1}, "-=interactime")
      .to(".dtxt", interactime, {css:{fill:"#52AB5C"}}, "-=interactime")
      .from(".hiddentxtd", 0.1, {yPercent: 150, opacity:0, autoAlpha:1, display:"none", ease:Power0.easeInOut}, "-=0.2");

      d.addEventListener('click', interact2);
        function interact2() {
          tl2.reversed() ? tl2.play() : tl2.reverse();
        }


      var tl3 = new TimelineMax({paused: true, reversed: true, ease:Back.easeOut});
      tl3
      .to("#i", interactime, {scale:1.3, ease:Back.easeOut})
      .to(".itxt", interactime, {x:-94, y: 7, rotation: -60, scale:1}, "-=interactime")
      .to(".itxt", interactime, {css:{fill:"#F39000"}}, "-=interactime")
      .from(".hiddentxti", 0.1, {yPercent: 150, opacity:0, autoAlpha:1, display:"none", ease:Power0.easeInOut}, "-=0.2");

      i.addEventListener('click', interact3);
        function interact3() {
          tl3.reversed() ? tl3.play() : tl3.reverse();
        }


      var tl4 = new TimelineMax({paused: true, reversed: true, ease:Back.easeOut});
      tl4
      .to("#p", interactime, {scale:1.3, ease:Back.easeOut})
      .to(".ptxt", interactime, {x:-78, y: 7, rotation: -60, scale:1}, "-=interactime")
      .to(".ptxt", interactime, {css:{fill:"#F15A29"}}, "-=interactime")
      .from(".hiddentxtp", 0.1, {yPercent: 150, opacity:0, autoAlpha:1, display:"none", ease:Power0.easeInOut}, "-=0.2");

      p.addEventListener('click', interact4);
        function interact4() {
          tl4.reversed() ? tl4.play() : tl4.reverse();
        }


      var tl5 = new TimelineMax({paused: true, reversed: true, ease:Back.easeOut});
      tl5
      .to("#t", interactime, {scale:1.3, ease:Back.easeOut})
      .to(".ttxt", interactime, {x:-105, y: 7, rotation: -60, scale:1}, "-=interactime")
      .to(".ttxt", interactime, {css:{fill:"#880600"}}, "-=interactime")
      .from(".hiddentxtt", 0.1, {yPercent: 150, opacity:0, autoAlpha:1, display:"none", ease:Power0.easeInOut}, "-=0.2");

      t.addEventListener('click', interact5);
        function interact5() {
          tl5.reversed() ? tl5.play() : tl5.reverse();
        }
