class Translate {
    constructor(word,language){
        this.apiKey = "trnsl.1.1.20181109T172412Z.e78db8ae81f79c67.df999a7bed822c96a5ea9c1925c2b077f968e6d9";
        this.word = word;
        this.language = language;
    }
    

    async get(){
        const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apiKey}&text=${this.word}&lang=${this.language}`;
        const cevap = await fetch(url);
        const data = await cevap.json();

        return data;
    }
    


}