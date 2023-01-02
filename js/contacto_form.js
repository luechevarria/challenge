const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const email = document.getElementById('email')
const mensaje = document.getElementById('mensaje')
const contacto_form = document.getElementById('contacto_form')


const nombreRegex=/^[a-zA-Z]{1,30}$/
const apellidoRegex=/^[a-zA-Z]{1,30}$/
const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
const mensajeRegex=/^[a-zA-Z0-9\._-]{1,300}$/

const arrayValidation=[]
const BD=[]


const valorNombre=(nombreValue)=>{
    if(nombreValue.trim()){
      if(nombreRegex.test(nombreValue)){
            if (!arrayValidation.includes('nombre')){
              arrayValidation.push('nombre')
              BD.push(nombreValue)
            }else{
              arrayValidation.pop()
              BD.pop()
              arrayValidation.push('nombre')
              BD.push(nombreValue)
            }
         }
      }else{
        alert('El nombre debe ser válido. Debe contener entre 1 y 30 caracteres y no pueden ser números')
        window.location.reload()
      }
    }
  
  const valorApellido=(apellidoValue)=>{
    if(apellidoValue.trim()){
      if(nombreRegex.test(apellidoValue)){
            if (!arrayValidation.includes('apellido')){
              arrayValidation.push('apellido')
              BD.push(apellidoValue)
            }else{
              arrayValidation.pop()
              BD.pop()
              arrayValidation.push('apellido')
              BD.push(apellidoValue)
            }
         }
      }else{
        alert('El apellido debe ser válido. Debe contener entre 1 y 30 caracteres y no pueden ser números')
        window.location.reload()
      }
    }
  

  const valorEmail=(emailValue)=>{
    if(emailValue.trim()){
      if(emailRegex.test(emailValue)){
            if (!arrayValidation.includes('email')){
              arrayValidation.push('email')
              BD.push(emailValue)
            }else{
              arrayValidation.pop()
              BD.pop()
              arrayValidation.push('email')
              BD.push(emailValue)
            }
         }
      }else{
        alert('El email debe ser válido. Debe contener entre 1 y 30 caracteres y no pueden ser números')
        window.location.reload()
      }
    }
  

  const valorMensaje=(mensajeValue)=>{
    if(mensajeValue.trim()){
      if(mensajeRegex.test(mensajeValue)){
            if (!arrayValidation.includes('mensaje')){
              arrayValidation.push('mensaje')
              BD.push(mensajeValue)
            }else{
              arrayValidation.pop()
              BD.pop()
              arrayValidation.push('mensaje')
              BD.push(mensajeValue)
            }
         }
      }else{
        alert('El mensaje debe ser válido. Debe contener entre 1 y 30 caracteres y no pueden ser números')
        window.location.reload()
      }
    }

  contacto_form.addEventListener('submit',(e)=>{
  e.preventDefault()
   if(arrayValidation.length>=4){
       localStorage.setItem(`${BD[2]/**email*/}`,JSON.stringify(BD))
       alert('Datos guardados correctamente')
       window.location.reload()
   }else{
    alert('Todos los campos deben contener valor válido')
   }
}
)


document.addEventListener('change',(e)=>{
    e.target.matches('#nombre') ? valorNombre(e.target.value) : null
    e.target.matches('#apellido') ? valorApellido(e.target.value) : null
    e.target.matches('#email') ? valorEmail(e.target.value) : null
    e.target.matches('#mensaje') ? valorMensaje(e.target.value) : null
})