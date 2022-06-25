const input = document.querySelector(".login_input");
const button = document.querySelector(".login_button");
const form=document.querySelector('.login_form')
const validateImput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;/*quando encontra esse return,ele sai do if.Poderia usar um else tranquilamente*/ 
  }
  button.setAttribute("disabled", "");
};

const handleSubmit=(event)=>{
    event.preventDefault() //linha que lida com o comentario do 'submit'.Bloqueia comportamento padrão do formulário.
    localStorage.setItem('player',input.value)
    window.location='pages/game.html'
    
}
input.addEventListener("input", validateImput);
form.addEventListener('submit',handleSubmit)//event 'submit' tem como comportamento padrão 'enviar e recarregar a página',lidamos com isso la na função 'handleSubmite',vide.

/*const validateImput=(event)=>{
    console.log(event.target.value) 
    Assim também funciona
    var ina=event.target.value
    console.log(ina) 

      //Function disparda quando o event 'input' acontece. Esse parâmetro 'captura' o evento atrelado a esse elemento.Usando o 'target'.'value' consigo acessar o que está sendo digitado
}*/
