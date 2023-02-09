const btnEnviar = document.getElementById('submit-btn');
btnEnviar.addEventListener('click', function (event) {
  // event.preventDefault();
});

const concordo = document.getElementById('agreement');
concordo.addEventListener('click', function () {
  if (concordo.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});
