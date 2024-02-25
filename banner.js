let i = 0;
    const images = document.querySelectorAll('#image-slide img'); //pega imagens
    let interval = setInterval(mudarImg, 4000); //intervalo

    function mudarImg() {
      images[i].style.display = 'none'; //esconde uma
      i = (i + 1) % images.length; //atualiza o índice
      images[i].style.display = 'block'; // exibe a próxima
    } //Nessa parte tive mais dificuldade, pois ainda não tinha entendido bem a lógica de um código assim, esconde uma imagem, atualiza para a próxima e exibe no banner. 

    document.getElementById('button').addEventListener('click', function() { 
      if (!interval) {
        interval = setInterval(mudarImg, 4000);
      }
    });

    document.getElementById('buttoff').addEventListener('click', function() {
      clearInterval(interval);
      interval = null;
    });