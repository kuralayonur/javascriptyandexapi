class UI{

    static addImageTitle(language){
        const outputLanguage = document.getElementById("outputLanguage");
        const outputImage = document.getElementById("outputImage");
        const languageInput = document.getElementById("language");
      
        outputImage.setAttribute("src",`images/${languageInput.value}.png`);
        outputLanguage.textContent = `${languageInput.options[languageInput.selectedIndex].text}`;        

        /*
            <img src="images/en.png" id = "outputImage" height="50px" width="50px" >
              <span class="card-title" id = "outputLanguage">İngilizce</span>
        */
       
    }
    static addTitle(value){
        const span = document.getElementById("outputWord");
        span.textContent = value;
    }
    



}