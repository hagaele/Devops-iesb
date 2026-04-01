const img = document.getElementById("cat-image");
const errorMessage = document.getElementById("error-message");

fetch("https://api.thecatapi.com/v1/images/search")
  .then(response => response.json())
  .then(data => {
    img.src = data[0].url;
    img.alt = "Imagem aleatória de gatinho";
  })
  .catch(error => {
    errorMessage.textContent = "Ops! Não foi possível carregar a imagem do gatinho. Tente novamente.";
    console.error("Erro ao buscar imagem:", error);
  });