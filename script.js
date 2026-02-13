document.addEventListener("DOMContentLoaded", () => {

  const boton = document.getElementById("btnMensaje");
  const mensaje = document.getElementById("mensaje");

  const btnRecuerdos = document.getElementById("btnRecuerdos");
  const btnVolver = document.getElementById("btnVolver");

  const principal = document.getElementById("principal");
  const album = document.getElementById("album");

  // BOTÓN MENSAJE
  boton.addEventListener("click", () => {
    mensaje.innerHTML = `
      Helen Maury 🤍<br><br>
    Eres lo más lindo que tengo,
    estar a tu lado me hace muy feliz y, espero
    que siga siendo asi muchiiisimos añooosss.  
    !Te Quiero Muchoooo¡🤍
  `;

    for (let i = 0; i < 15; i++) {
      crearCorazon();
    }
  });


  btnRecuerdos.addEventListener("click", () => {
    principal.style.display = "none";
    album.style.display = "block";
  });


  btnVolver.addEventListener("click", () => {
    album.style.display = "none";
    principal.style.display = "block";
  });

  function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "heart";
    corazon.textContent = "❤️";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 15 + 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 4000);
  }


  const fotos = document.querySelectorAll(".foto img");
  const modal = document.getElementById("modal");
  const imgGrande = document.getElementById("imgGrande");
  const cerrar = document.getElementById("cerrar");

  fotos.forEach(foto => {
    foto.addEventListener("click", () => {
      modal.style.display = "flex";
      imgGrande.src = foto.src;
    });
  });

  cerrar.addEventListener("click", () => {
    modal.style.display = "none";
  });

});

