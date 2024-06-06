window.onload = function() {
  var acc = document.getElementsByClassName("accordion");

  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");

          var panel = this.parentNode.nextElementSibling;

          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }

  var usuarioCita = document.getElementById("usuarioCita");
  usuarioCita.value = localStorage.getItem('usuario');
  var usuarioContacto = document.getElementById("usuarioContacto");
  usuarioContacto.value = localStorage.getItem('usuario');
};

