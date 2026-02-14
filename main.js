const music = document.getElementById('bg-music');
const btn = document.getElementById('startBtn');
const flowers = document.querySelector('.flowers');

btn.addEventListener('click', () => {
  // Patugtugin ang music
  music.play().catch(err => console.log(err));

  // Optional: magdagdag ng animation class para magsayaw ang flowers
  flowers.classList.add('dance');

  // Itago ang button pagkatapos pindutin
  btn.style.display = 'none';
});
