// script.js
document.addEventListener('DOMContentLoaded', function() {
    const inscriptions = [
        { title: "Matthew 1", id: "123456", link: "https://example.com/inscription/123456" },
        // Add more inscriptions here
    ];

    const inscriptionsList = document.getElementById('inscriptions-list');

    inscriptions.forEach(inscription => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${inscription.title}</h3>
                         <p>ID: ${inscription.id}</p>
                         <a href="${inscription.link}" target="_blank">View Inscription</a>`;
        inscriptionsList.appendChild(div);
    });
});
