const button = document.querySelector("button");
const container_modal = document.querySelector(".container_modal");
const audio = document.createElement('audio');

const openModal = () => {
 
  const gerarCorAleatoria = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  };

  audio.setAttribute('src', "Pharrell Williams - Happy (Video)_ZbZSe6N_BXs.mp3");

  container_modal.classList.add("ativo");
  container_modal.appendChild(audio);

  setInterval(() => {
    document.body.style.backgroundColor = gerarCorAleatoria();
  }, 100);

  audio.addEventListener('loadedmetadata', () => {
    audio.play();
    audio.loop()
  });
};

button.addEventListener("click", openModal);
