///////////// FIOCCHI ////////////

let COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

NUM_CONFETTI = 200;

COLORS = [[185, 222, 249], [114, 189, 243], [44, 156, 237], [16, 116, 188], [10, 73, 117]];

PI_2 = 2 * Math.PI;

canvas = document.getElementById("world");

context = canvas.getContext("2d");

window.w = 0;

window.h = 0;

resizeWindow = function() {
  window.w = canvas.width = window.innerWidth;
  return window.h = canvas.height = window.innerHeight;
};

window.addEventListener('resize', resizeWindow, false);

window.onload = function() {
  return setTimeout(resizeWindow, 0);
};

range = function(a, b) {
  return (b - a) * Math.random() + a;
};

drawCircle = function(x, y, r, style) {
  context.beginPath();
  context.arc(x, y, r, 0, PI_2, false);
  context.fillStyle = style;
  return context.fill();
};

xpos = 0.5;

document.onmousemove = function(e) {
  return xpos = e.pageX / w;
};

window.requestAnimationFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
})();

Confetti = class Confetti {
  constructor() {
    this.style = COLORS[~~range(0, 5)];
    this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
    this.r = ~~range(10, 16);
    this.r2 = 2 * this.r;
    this.replace();
  }

  replace() {
    this.opacity = 0;
    this.dop = 0.03 * range(1, 4);
    this.x = range(-this.r2, w - this.r2);
    this.y = range(-20, h - this.r2);
    this.xmax = w - this.r;
    this.ymax = h - this.r;
    this.vx = range(0, 2) + 8 * xpos - 5;
    return this.vy = 0.2 * this.r + range(-1, 1);
  }

  draw() {
    let ref;
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;
    if (this.opacity > 1) {
      this.opacity = 1;
      this.dop *= -1;
    }
    if (this.opacity < 0 || this.y > this.ymax) {
      this.replace();
    }
    if (!((0 < (ref = this.x) && ref < this.xmax))) {
      this.x = (this.x + this.xmax) % this.xmax;
    }
    return drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
  }

};

confetti = (function() {
  let j, ref, results;
  results = [];
  for (i = j = 1, ref = NUM_CONFETTI; (1 <= ref ? j <= ref : j >= ref); i = 1 <= ref ? ++j : --j) {
    results.push(new Confetti());
  }
  return results;
})();

window.step = function() {
  let c, j, len, results;
  requestAnimationFrame(step);
  context.clearRect(0, 0, w, h);
  results = [];
  for (j = 0, len = confetti.length; j < len; j++) {
    c = confetti[j];
    results.push(c.draw());
  }
  return results;
};

step();


////////////////APPARIZIONE DELLA SUNNY/////////////////////


document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const button = document.getElementById("myButton");
  const img = document.querySelector(".thousand-sunny");
  img.style.display = "none";

  button.addEventListener("click", function () {
      container.style.background = "white";
      document.querySelector("#world").style.display = "none";
      document.querySelector("h1").style.display = "none";
      document.querySelector("#myButton").style.display = "none";

      const img = document.querySelector(".thousand-sunny");
      img.style.display = "block";
      img.style.position = "absolute";
      img.style.top = "50%";
      img.style.left = "50%";
      img.style.transform = "translate(-50%, -50%)";
      img.style.opacity = 0; 

      const onda = document.querySelector(".onda");
      onda.style.display = "block";
      onda.style.position = "absolute";
      onda.style.top = "70%";
      onda.style.left = "50%";
      onda.style.transform = "translateX(-50%)";
      onda.style.opacity = 0;
      
      /////////// TEMPI DI DURATA /////////
      const skipPagina = 8000;
      const opacizzaImmagine = 3000;
      const deOpacizzaImmagine = 3000;

      ////////// FUNZIONE PER OPACIZZARE///////////
      let startTime = null;
      let currentTime;

      function updateOpacity(timestamp) {
        if (!startTime) {
            startTime = timestamp;
        }
        currentTime = timestamp - startTime;
        const progress = currentTime / opacizzaImmagine;
        if (progress < 1) {
            img.style.opacity = progress;
            onda.style.opacity = progress;
            requestAnimationFrame(updateOpacity);
        } else {
            img.style.opacity = 1;
            onda.style.opacity = 1;
        }
    }
    requestAnimationFrame(updateOpacity);

    //////////FUNZIONE PER DEOPACIZZARE/////////////
    let startTime2 = 5000;
    let currentTime2;

    function degradeOpacity(timestamp2) {
      if (startTime2 = 5000) {
          startTime2 = timestamp2;
      }
      currentTime2 = timestamp2 - startTime2;
      const progress2 = currentTime2 / deOpacizzaImmagine;
      if (progress2 < 1) {
          img.style.opacity = progress2;
          onda.style.opacity = progress2;
          requestAnimationFrame(degradeOpacity);
      } else {
          img.style.opacity = 0;
          onda.style.opacity = 0;
      }
  }
  requestAnimationFrame(degradeOpacity);

    setTimeout(function () {
        window.location.href = "Landing.html";
    }, skipPagina);

  });
});

