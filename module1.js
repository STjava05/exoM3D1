// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

// function runs after full loading page
window.onload = function removeTwitter() {
   let myAside = document.getElementsByTagName('aside')[0];

   let myDiv = myAside.querySelectorAll('div')[2]; // third DIV

   let myTwitter = myDiv.querySelectorAll('a')[1]; // second link

    myTwitter.remove();
}

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

function removeParent() {
   let myJumbo = document.getElementsByClassName('jumbotron')[0];
   let myAnchor = myJumbo.querySelectorAll('a')[0];

    myAnchor.addEventListener ('click', () => {
        // myAnchor.parentNode.remove();
      let  myPar = myJumbo.getElementsByTagName('p')[1];
        myPar.remove();
    });
}

removeParent();

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

function mouseOverAuthor() {
   let myMeta = document.getElementsByClassName('blog-post-meta');
    console.log(myMeta);

    for (let i = 0; i < myMeta.length; i++) {
      let  myAuthors = myMeta[i].getElementsByTagName('a')[0];
        console.log(myAuthors);
        myAuthors.addEventListener ('mouseover', () => {
            alert(myAuthors.innerText);
        })        
    }
}

mouseOverAuthor();