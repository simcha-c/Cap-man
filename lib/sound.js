class Sound {
 constructor(src) {
   this.sound = document.createElement("audio");
   this.sound.src = src;
   this.sound.setAttribute("preload", "auto");
   this.sound.setAttribute("controls", "none");
   this.sound.style.display = "none";
   document.body.appendChild(this.sound);
   this.play = function() {
     this.sound.play();
   };
   this.stop = function() {
     this.sound.pause();
     this.currentTime = 0;
   };
 }
}

export default Sound;

// beginning = new Sound("sounds/pacman_beginning.wav");
// chomp = new Sound("sounds/pacman_chomp.wav");
// death = new Sound("sounds/pacman_death.wav");
// eatGhost = new Sound("sounds/pacman_eat_ghost.wav");
