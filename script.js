document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const mobileNavbar = document.getElementById('mobile-nav');
    let isMenuOpen = false;
    

    menuIcon.addEventListener('click', () => {
        mobileNavbar.classList.toggle('show-menu');
        isMenuOpen = !isMenuOpen;

        if (isMenuOpen) {
            menuIcon.src = 'assets/images/cross.png';
            menuIcon.alt = 'Zamknij menu';
          } else {
            menuIcon.src = 'assets/images/menu.png';
            menuIcon.alt = 'Otwórz menu';
          }
    });
});




function showDocument(documentPath ,clickedElement) {
    var documentContainer = document.getElementById('document-container');
    documentContainer.innerHTML = '<iframe src="assets/documents/' + documentPath + '" width="100%" height="600px"></iframe>';

    // Usuń klasę 'active' ze wszystkich elementów listy
    var listItems = document.querySelectorAll('#document-list li');
    listItems.forEach(item => {
        item.classList.remove('active');
    });

    // Dodaj klasę 'active' do klikniętego elementu
    clickedElement.classList.add('active');
}

function downloadDocument(filePath, fileName) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName + '.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function getWeather(location, elementId) {
    fetch(`https://wttr.in/${location}?format=j2`)
        .then(response => response.json())
        .then(data => {
            const currentCondition = data.current_condition[0];
            const feelsLikeC = currentCondition.FeelsLikeC;

            document.getElementById(elementId).innerText = `${location}: ${feelsLikeC}°C`;
            document.getElementById(elementId).style.visibility = "visible";
        })
        .catch(error => {
            console.error('Błąd pobierania danych o pogodzie:', error);
        });
}



getWeather('Las Palmas', 'weathermark-laspalmas');


getWeather('Warszawa', 'weathermark-warsaw');

