const header = document.querySelector('header'); 
const section = document.querySelector('section');

let requestURL = 'https://raw.githubusercontent.com/PILIX123/420-4C5-LL-BD-et-s-curit-des-applications/main/film.json';

request = new XMLHttpRequest(); //Ouverture de la requête

request.open('Get', requestURL);

request.responseType= 'json';
request.send();

request.onload= maFonctionCallBack;


function maFonctionCallBack() {

    const Film = this.response;
    
    maFonctionFilm(Film);
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
    myH1.textContent=film['Titre'];
    header.appendChild(myH1);

    const myPara1 = document.createElement('p');
    myPara1.textContent = 'Directeur: ' + film['Directeur'] + ' // Auteur: ' + film['Auteur'];
    header.appendChild(myPara1);

    const myPara2 = document.createElement('p');
    myPara2.textContent = 'Date: ' + film['Date'];
    header.appendChild(myPara2);

    const myPara3 = document.createElement('p');
    myPara3.textContent = 'Budget: '+ film['Budget']+' $';
    header.appendChild(myPara3);
    const myPara4 = document.createElement('p');
    myPara4.textContent = "Fin de semaine d'ouverture: " + film['Fin de semaine ouverture']+' $';
    header.appendChild(myPara4);
    const myPara5 = document.createElement('p');
    myPara5.textContent = 'Total USA: '+ film['Total USA']+' $';
    header.appendChild(myPara5);
    const myPara6 = document.createElement('p');
    myPara6.textContent =     'Total mondial: '+film['Total mondial']+' $';
    header.appendChild(myPara6);

    const description = document.createElement('p');
    description.textContent = 'Description: ' + film['Description'];
    header.appendChild(description);
}

function afficherVedette(film) {
    const Vedette = film['Vedette'];
    
    for(var i =0; i< Vedette.length; i++){
        const myArticle = document.createElement('article');
        const Age = document.createElement('p');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');

        myH2.textContent = Vedette[i].Nom;
        myPara1.textContent = 'Personnage: ' + Vedette[i].Personnage;
        Age.textContent = 'Age: ' + Vedette[i].Age;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(Age);

        section.appendChild(myArticle);
    }
}