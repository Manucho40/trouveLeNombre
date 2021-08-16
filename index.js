const valeurEntrer = document.getElementById("champs");
const formulaire = document.querySelector("form");
let vie = document.querySelectorAll("i");
let output = document.getElementById("indice");
const reset = document.querySelector('.but');
let chance = -1;
const resultat = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
const indice = ["Trop Grand", "Trop petit", "GENIAL VOUS AVEZ GAGNEZ <i class='fas fa-trophy'></i>", "Tu as perdu <i class='fas fa-dizzy'></i>"];



formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if(valeurEntrer.value != resultat){
        if(valeurEntrer.value > resultat){
            output.style.color = "red";
            output.innerHTML = indice[0];
           }else{
            output.style.color = "red";
            output.innerHTML = indice[1];
           }
        chance++;
        valeurEntrer.value = ""
        console.log(chance);
        console.log(vie[chance])
        vie[chance].classList.add("fa-heart-broken", "faBlack");
        if(chance === 4){
            valeurEntrer.setAttribute("disabled", "true");
            output.style.color = "red";
            output.innerHTML = indice[3];
            reset.style.visibility = "visible";
        }
       
        
    }else{
        output.style.color = "green";
        output.innerHTML = indice[2];
        valeurEntrer.setAttribute("disabled", "true");
        // reset.style.color = "red";
        reset.style.visibility = "visible";
    }
})


reset.addEventListener('click', () => {
    window.location.reload()
})