function readEnglish() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
      }
    };
    xhttp.open("GET", "source/en.json", true);
    xhttp.send();
  }
  
  function readSpanish() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        // Actualiza el título de la página
        document.getElementById("titulo").innerHTML = data.titulo;
        // Actualiza el contenido del botón "Spanish"
        document.querySelector("h2").innerHTML = data.S1;
        // Actualiza el contenido del encabezado "¡Bienvenidos!"
        document.querySelector("p").innerHTML = data.bienvenidos;
        // Actualiza el contenido del encabezado "Habilidades y Aptitudes"
        document.querySelector("h2").innerHTML = data.S2;
      }
    };
    xhttp.open("GET", "source/es.json", true);
    xhttp.send();
  }
  