const $titles = document.querySelectorAll('.article__title a');
const $images = document.querySelectorAll('.image');
const $introductions = document.querySelectorAll('.article__introduction');
const $tops = document.querySelectorAll('.tops a');
const $recents = document.querySelectorAll('.recents a');

export default function getNews() {
    const apiKey = 'qT1M4S2fPd1JSAQF0AZL3sg36dqtC1aw';

    const categories = [
        'technology',
        'science',
        'arts',
        'health',
        'movies',
        'sports',
        'travel'
    ];

    // Noticias sobre tecnologia
    const technologyNews = async () => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[0]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const results = await api.json();

        // Reemplaza el contenido de articulos
        $titles[0].textContent = results.results[0].title;
        $images[0].setAttribute('src', `${results.results[0].multimedia[2].url}`);
        $introductions[0].textContent = results.results[0].abstract;
        // Reemplazar titulos de los tops
        $tops[0].textContent = results.results[1].title;
        // Reemplazar titulos de los recents
        $recents[0].textContent = results.results[2].title;
    }

    // Noticias sobre ciencias
    const scienceNews = async () => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[1]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const results = await api.json();

        // Reemplaza el contenido de articulos
        $titles[1].textContent = results.results[0].title;
        $images[1].setAttribute('src', `${results.results[0].multimedia[2].url}`);
        $introductions[1].textContent = results.results[0].abstract;
        // Reemplazar titulos de los tops
        $tops[1].textContent = results.results[1].title;
        // Reemplazar titulos de los recents
        $recents[1].textContent = results.results[2].title;
    }

    //noticias sobre arte
    const artsNews = async () => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[2]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const results = await api.json();

        // Reemplaza el contenido de articulos
        $titles[2].textContent = results.results[0].title;
        $images[2].setAttribute('src', `${results.results[0].multimedia[2].url}`);
        $introductions[2].textContent = results.results[0].abstract;
        // Reemplazar titulos de los tops
        $tops[2].textContent = results.results[1].title;
        // Reemplazar titulos de los recents
        $recents[2].textContent = results.results[2].title;
    }

    // Noticias sobre salud

    const healthNews = async () => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[3]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const results = await api.json();

        // Reemplaza el contenido de articulos
        $titles[3].textContent = results.results[0].title;
        $images[3].setAttribute('src', `${results.results[0].multimedia[2].url}`);
        $introductions[3].textContent = results.results[0].abstract;
        // Reemplazar titulos de los tops
        $tops[3].textContent = results.results[1].title;
        // Reemplazar titulos de los recents
        $recents[3].textContent = results.results[2].title;
    }

    // Noticias sobre peliculas
    const moviesNews = async () => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[4]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const results = await api.json();

        // Reemplaza el contenido de articulos
        $titles[4].textContent = results.results[0].title;
        $images[4].setAttribute('src', `${results.results[0].multimedia[2].url}`);
        $introductions[4].textContent = results.results[0].abstract;
        // Reemplazar titulos de los tops
        $tops[4].textContent = results.results[1].title;
        // Reemplazar titulos de los recents
        $recents[4].textContent = results.results[2].title;
    }

    // Noticias sobre deportes
    const sportsNews = async () => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[5]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const results = await api.json();

        // Reemplaza el contenido de articulos
        $titles[5].textContent = results.results[0].title;
        $images[5].setAttribute('src', `${results.results[0].multimedia[2].url}`);
        $introductions[5].textContent = results.results[0].abstract;
    }

    // Noticias sobre viajes
    const travelNews = async () => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[6]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const results = await api.json();

        // Reemplaza el contenido de articulos
        $titles[6].textContent = results.results[0].title;
        $images[6].setAttribute('src', `${results.results[0].multimedia[2].url}`);
        $introductions[6].textContent = results.results[0].abstract;
    }

    technologyNews();
    scienceNews();
    artsNews();
    healthNews();
    moviesNews();
    sportsNews();
    travelNews();
}