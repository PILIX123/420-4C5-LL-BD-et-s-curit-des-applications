const header = document.querySelector('header'); 
const section = document.querySelector('section');

let requestURL = 'https://localhost:5001/films/Les%20Minions?JusteVedette=true&MaxVedette=2';

request = new XMLHttpRequest(); //Ouverture de la requête

request.open('Get', requestURL);

request.responseType= 'json';
request.send();

request.onload= maFonctionCallBack;


function maFonctionCallBack() {

    const Film = this.response;
    
    construireEntete(Film);
    afficherVedette(Film);

}
function maFonctionFilm(film){
    const Films = film['Films'];

    for(var i =0; i<Films.length;i++){
        var film = Films[i];

        construireEntete(film);

        afficherVedette(film)
    }
}
function construireEntete(film) {
    const myH1 = document.createElement('h1');
    myH1.textContent=film['titre'];
    header.appendChild(myH1);

    if(film['directeur']!=null){
        const myPara1 = document.createElement('p');
        myPara1.textContent = 'Directeur: ' + film['directeur'] + ' // Auteur: ' + film['auteur'];
        header.appendChild(myPara1);

        const myPara2 = document.createElement('p');
        myPara2.textContent = 'Date: ' + film['date'];
        header.appendChild(myPara2);

        const myPara3 = document.createElement('p');
        myPara3.textContent = 'Budget: '+ film['budget']+' $';
        header.appendChild(myPara3);
        const myPara4 = document.createElement('p');
        myPara4.textContent = "Fin de semaine d'ouverture: " + film['fdsOpen']+' $';
        header.appendChild(myPara4);
        const myPara5 = document.createElement('p');
        myPara5.textContent = 'Total USA: '+ film['usa']+' $';
        header.appendChild(myPara5);
        const myPara6 = document.createElement('p');
        myPara6.textContent =     'Total mondial: '+film['mondial']+' $';
        header.appendChild(myPara6);

        const description = document.createElement('p');
        description.textContent = 'Description: ' + film['description'];
        header.appendChild(description);
    }
}

function afficherVedette(film) {
    const Vedette = film['vedettes'];
    
    for(var i =0; i< Vedette.length; i++){
        const myArticle = document.createElement('article');
        const Age = document.createElement('p');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');

        myH2.textContent = Vedette[i].nom;
        myPara1.textContent = 'Personnage: ' + Vedette[i].personnage;
        Age.textContent = 'Age: ' + Vedette[i].age;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(Age);

        section.appendChild(myArticle);
    }
}