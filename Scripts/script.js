let mouseC = document.getElementsByClassName("mouse-c");
let box = document.getElementsByClassName("box");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mousemove", function (e) {
    let x = e.pageX - this.offsetLeft;
    let y = e.pageY - this.offsetTop;
    for (let i = 0; i < mouseC.length; i++) {
      if (mouseC[i].parentNode === this) {
        mouseC[i].style.top = y + "px";
        mouseC[i].style.left = x + "px";
      }
    }
  });

  box[i].addEventListener("mouseenter", function () {
    for (let i = 0; i < mouseC.length; i++) {
      if (mouseC[i].parentNode === this) {
        mouseC[i].style.opacity = 1;
      }
    }
  });

  box[i].addEventListener("mouseleave", function () {
    for (let i = 0; i < mouseC.length; i++) {
      if (mouseC[i].parentNode === this) {
        mouseC[i].style.opacity = 0;
      }
    }
  });
}

let rickrollBtn = document.getElementById("rickroll");

rickrollBtn.addEventListener("click", function () {
  let vid = document.createElement("video");
  vid.className = "rickroll-vid";
  vid.setAttribute("autoplay", "");
  vid.src = "videos/rickroll.mp4";
  document.body.appendChild(vid);
  vid.play();

  let cover = document.createElement("div");
  cover.className = "cover";
  document.body.appendChild(cover);

  setTimeout(function () {
    vid.remove();
    cover.remove();
  }, 7000);
});
