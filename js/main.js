//Seleziono il button a cui aggiungere l event listener
const btn = document.getElementById('btn');

btn.addEventListener('click',
    function() {
        for (let i = 0; i < 100; i++) {
            const container = document.getElementById('container');
            // container.innerHTML = `<div class="box"></div>`;

            let newBox = document.createElement("div");
            newBox.classList.add("box");
            container.append(newBox);
        }
        
    }
);