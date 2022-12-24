(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

const formInput1 = document.getElementById("validationCustom01");
const formInput2 = document.getElementById("validationCustom02");
const formInput3 = document.getElementById("validationCustomUsername");
const formInput4 = document.getElementById("validationCustom03");
const formButton = document.getElementById("sendBtn");

// the default state is 'disabled'
formButton.disabled = true; 

// alternative is to use "change" - explained below
formInput1.addEventListener("keyup", buttonState);
formInput2.addEventListener("keyup", buttonState);
formInput3.addEventListener("keyup", buttonState);
formInput4.addEventListener("keyup", buttonState);

function buttonState() {
    if (document.getElementById("validationCustom01").value === "") {
        formButton.disabled = true; 
    } 
    else if (document.getElementById("validationCustom03").value === "") {
        formButton.disabled = true;
    } 
    else if (document.getElementById("validationCustomUsername").value === "") {
        formButton.disabled = true; 
    }
    else if (document.getElementById("validationCustom02").value === "") {
        formButton.disabled = true; 
    }
    else {
        formButton.disabled = false; 
    }
}

// just verifying that the button has been clicked
formButton.addEventListener("click", () => {
console.log("You entered:", document.querySelector(".form-input").value);
});

$(document).on('click', '#sendBtn', function(e) {
    swal(
        'Başarılı',
        document.getElementById("validationCustomUsername").value + ' adlı instagram hesabına ' + document.getElementById("validationCustom03").value + " takipçi gönderim işleminiz sıraya alınmıştır.",
        'success'
    )
});