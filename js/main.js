//Seleziono il button a cui aggiungere l event listener
const btn = document.getElementById('btn');

btn.addEventListener('click',
    function() {
        const container = document.getElementById('container');
        container.innerHTML = `<div class="box"></div>`;
    }
);