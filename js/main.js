//Seleziono il button a cui aggiungere l event listener
const btn = document.getElementById('btn');

btn.addEventListener('click',
    function() {
        for (let i = 1; i <= 100; i++) {
            const container = document.getElementById('container');
            // container.innerHTML = `<div class="box"></div>`;

            let newBox = document.createElement("div");
            newBox.classList.add("box");
            container.append(newBox);

            newBox.append([i]);

            newBox.addEventListener('click',
                function () {
                    newBox.classList.add("bg-yellow");
                    console.log('Hai selezionato il numero: ' + [i]);
                }
            )
        }
        
    }
);