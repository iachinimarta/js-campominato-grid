//Seleziono il button a cui aggiungere l event listener
const btn = document.getElementById('btn');

//Aggiungo un event listner al btn
btn.addEventListener('click',
    function() {

        //Imposto un ciclo for per stampare i box fino a n 100
        for (let i = 1; i <= 100; i++) {

            //Richiamo il container in cui voglio stampare
            const container = document.getElementById('container');

            //Creo un div da inserire nel contaier
            let newBox = document.createElement("div");

            //Aggiungo la classe box al div
            newBox.classList.add("box");

            //Inserisco il box creato in container
            container.append(newBox);

            //Inserisco all interno del box il numero della sua posizione
            newBox.append(i);

            //Aggiungo un event listener al box 
            newBox.addEventListener('click',
                function () {
                    
                    //Al click lo sfondo cambia in giallo e stampo il numero del box scelto in console.log
                    newBox.classList.add("bg-yellow");
                    console.log('Hai selezionato il numero: ' + i);
                }
            );
        }
    }
);