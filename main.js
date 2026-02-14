const music = document.getElementById('bg-music');

function playMusicOnce() {
  music.play().catch(err => console.log(err));
  document.body.removeEventListener('click', playMusicOnce);
  document.body.removeEventListener('touchstart', playMusicOnce);
}

// Tap anywhere to play
document.body.addEventListener('click', playMusicOnce);
document.body.addEventListener('touchstart', playMusicOnce);