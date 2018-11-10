const inputElement = document.getElementById("word");
const languageInput = document.getElementById("language");

eventListeners();

function eventListeners(){
    document.getElementById("translate-form").addEventListener("submit",translateWork);
    inputElement.onkeyup = () => {
      if(!(inputElement.value === "")){
            translateWork();
      }      
    };

    languageInput.onchange = function(e){
        // Arayüz işlemleri
        
        if(!(inputElement.value === "")){
            translateWork();
        }
        UI.addImageTitle(languageInput.value);
    };
    document.addEventListener('DOMContentLoaded', function(){
        UI.addImageTitle(languageInput.value);
    });

};

function translateWork(e){
    requests = new Translate(inputElement.value,languageInput.value);
    requests.get()
    .then(response => response)
    .then(data => UI.addTitle((data.text[0].toUpperCase())))
    .catch(err => console.log(err)); 
};




