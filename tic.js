console.log("worksss");
let i1;
let i2;

let bg;

let start_song;

let box = document.querySelector(".box");

let win_box = document.querySelector(".win_box");

let draw_box = document.querySelector(".draw_box");

draw_box.style["display"] = "none";

win_box.style["display"] = "none";

box.style["display"] = "none";

let draw = 0;



let spin = document.querySelector('.spinner');


let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");

let pbox = document.querySelector(".pbox");

let panda = document.querySelector(".panda");

panda.addEventListener("submit", enter, true);

function enter(e) {
  e.preventDefault();
  i1 = p1.value;
  i2 = p2.value;

  start_song = document.createElement("audio");
  document.body.append(start_song);

  start_song.src = "music/start_play.wav";
  start_song.loop = true;
  start_song.volume = 1;
  start_song.play();

  localStorage.setItem("Player 1", i1);
  localStorage.setItem("Player 2", i2);

  setTimeout(()=>{
    spin.style['display'] = 'block';
  },100)

  setTimeout(() => {
    display();
    box.style["display"] = "block";
  }, 2000);

  
  pbox.style["display"] = "none";

  console.log(s1);
  console.log(s2);
}

function display() {
  spin.style['display'] = 'none';
  bg.pause();

  start_song.pause();
  let song = document.createElement("audio");
  document.body.append(song);

  song.src = "music/bg.mp3";
  song.loop = true;
  song.volume = 0.7;
  song.play();

  let player1 = "X";
  let player2 = "O";

  let check = false;

  let s1 = document.querySelector(".s1");
  let s2 = document.querySelector(".s2");
  let s3 = document.querySelector(".s3");
  let s4 = document.querySelector(".s4");
  let s5 = document.querySelector(".s5");
  let s6 = document.querySelector(".s6");
  let s7 = document.querySelector(".s7");
  let s8 = document.querySelector(".s8");
  let s9 = document.querySelector(".s9");

  let win = document.querySelector(".win");
  win.innerHTML = i1.toUpperCase() + " " + "Turn";
  win.style['color'] = 'purple';
  win.style['fontsize'] = 50+'px';

  let span = document.querySelectorAll("span");

  console.log(span);

  span.forEach((element) => {
    element.onclick = (e) => {
      

      draw += 1;
      console.log(draw);
      let song = document.createElement("audio");
      document.body.append(song);
      song.src = "music/click.wav";
      song.volume = 1;
      song.play();

      console.log(e.target);
      e.target.onclick = null;
      let two = e.target.textContent;
      console.log(two);
      check = !check;

      box.classList.add('boxmove');

      

      setTimeout(()=>{
        box.classList.remove('boxmove');
      },700)

      let one = e.target;


      one.classList.add('effect');

      one.style['opacity'] = 1;

      setTimeout(()=>{
        one.classList.remove('effect');
      },700)



      if (one.textContent.length > 0) {
        check = undefined;
        return false;
      }

      one.style['color'] = ((check == true) ? 'black' : 'white')

      one.textContent = check == true ? "X" : "O";

      win.textContent = check == true ? i2.toUpperCase() + " " + "Turn" : i1.toUpperCase() + " " + "Turn";

      if (
        (s1.textContent == "X" &&
          s2.textContent == "X" &&
          s3.textContent == "X") ||
        (s4.textContent == "X" &&
          s5.textContent == "X" &&
          s6.textContent == "X") ||
        (s7.textContent == "X" &&
          s8.textContent == "X" &&
          s9.textContent == "X")
      ) {
        console.log("X win");
        win.textContent = i1 + " " + "win!!!";

        Win(i1);
      } else if (
        (s1.textContent == "X" &&
          s4.textContent == "X" &&
          s7.textContent == "X") ||
        (s2.textContent == "X" &&
          s5.textContent == "X" &&
          s8.textContent == "X") ||
        (s3.textContent == "X" &&
          s6.textContent == "X" &&
          s9.textContent == "X")
      ) {
        console.log("X win");
        win.textContent = i1 + " " + "win!!!";

        Win(i1);
      } else if (
        (s1.textContent == "X" &&
          s5.textContent == "X" &&
          s9.textContent == "X") ||
        (s3.textContent == "X" &&
          s5.textContent == "X" &&
          s7.textContent == "X")
      ) {
        console.log("X win");
        win.textContent = i1 + " " + "win!!!";

        Win(i1);
      } else if (
        (s1.textContent == "O" &&
          s2.textContent == "O" &&
          s3.textContent == "O") ||
        (s4.textContent == "O" &&
          s5.textContent == "O" &&
          s6.textContent == "O") ||
        (s7.textContent == "O" &&
          s8.textContent == "O" &&
          s9.textContent == "O")
      ) {
        console.log("O win");
        win.textContent = i2 + " " + "win!!!";

        Win(i2);
      } else if (
        (s1.textContent == "O" &&
          s4.textContent == "O" &&
          s7.textContent == "O") ||
        (s2.textContent == "O" &&
          s5.textContent == "O" &&
          s8.textContent == "O") ||
        (s3.textContent == "O" &&
          s6.textContent == "O" &&
          s9.textContent == "O")
      ) {
        console.log("O win");
        win.textContent = i2 + " " + "win!!!";

        Win(i2);
      } else if (
        (s1.textContent == "O" &&
          s5.textContent == "O" &&
          s9.textContent == "O") ||
        (s3.textContent == "O" &&
          s5.textContent == "O" &&
          s7.textContent == "O")
      ) {
        console.log("O win");
        win.textContent = i2 + " " + "win!!!";

        Win(i2);
      } else if (draw >= 9) {
        console.log("draw");
        Draw();
      }
    };
  });
}

function Win(name) {
  
  let song = document.createElement("audio");
  document.body.append(song);
  song.src = "music/win.mp3";
  song.volume = 1;
  song.play();

  let again = document.querySelector(".again");

  let w_h = document.querySelector(".w_h");
  w_h.textContent =  name.toUpperCase() + " " + "win!!!";
  win_box.style["display"] = "flex";
 
  box.style["display"] = "none";

  again.onclick = () => {
    window.location.href ="index.html";
  };
}

function Draw() {
  let song = document.createElement("audio");
  document.body.append(song);
  song.src = "music/over.mp3";
  // song.loop = true;
  song.volume = 1;
  song.play();

  let again1 = document.querySelector(".again1");

  draw_box.style["display"] = "flex";
  box.style["display"] = "none";

  again1.onclick = () => {
    window.location.href = "index.html";
  };
}

window.onload = function () {
  bg = document.createElement("audio");
  document.body.append(bg);
  bg.src = "music/start.mp3";
  bg.loop = true;
  bg.volume = 0.7;
  bg.play();
};
