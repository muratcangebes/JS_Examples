
//PROFİL FOTOSU İÇİN JS KODU: 

function previewImage() {
    var preview = document.getElementById("profil_foto_img");
    var file    = document.getElementById("profil_foto_input").files[0];
    var reader  = new FileReader();

    reader.onloadend = function () {
      //preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "default_profil_foto.jpg";
    }
  }

  var profilFoto = document.getElementById("profil_foto");
  profilFoto.onclick = function() {
    var profilFotoInput = document.getElementById("profil_foto_input");
    profilFotoInput.click();
  }

// -----------------------------


















  