// recuperer le bouton avec l'id btn 
const btn =  document.getElementById('btn')

// recuperer le paragraphe avec l'id messge 
const messge = document.getElementById('message')

// creer une variable compteur
let compteur = 0

// ajouter un evenement lors du click 
btn.addEventListener('click', () => {
   // alert("Click ok")
   // console.log("Click ok")
   compteur++ //ajouter 1
    message.textContent = compteur.toString()

// lorsqu'on atteint 10 click
if(compteur == 10){
    btn.textContent = "Méga click"
    btn.style.width = "200px"
    btn.style.height = "200px"
}else if(compteur == 100){
    btn.textContent = "Ultra Méga click"
    btn.style.width = "400px"
    btn.style.height = "400px"
}

})
