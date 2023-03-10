// Example starter JavaScript for disabling form submissions if there are invalid fields
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



  
try
{
  let add=document.querySelector(".add");
let sub=document.querySelector(".subtract");
let count=document.querySelector(".count");


add.addEventListener("click",()=>{
    count.innerHTML++;
})

sub.addEventListener("click",()=>{
    count.innerHTML--;
})
}

catch(error)
{
  console.log(error.message);
}


var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}


try
{
  let menu=document.querySelector(".nav_menu");
  let menuBtn=document.querySelector(".nav_open_btn");
  let closeBtn=document.querySelector(".nav_close_btn");
  
  menuBtn.addEventListener('click', ()=>{
      menu.style.display="flex";
      menuBtn.style.display="none";
      closeBtn.style.display="inline-block";
  })
  
  closeBtn.addEventListener('click', ()=>{
      menu.style.display="none";
      menuBtn.style.display="inline-block";
      closeBtn.style.display="none";
  
  })
  
}

catch(error)
{
    console.log(error.message);
}

