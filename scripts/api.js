const $titles = document.querySelectorAll('.article__title a');
const $images = document.querySelectorAll('.image');
const $introductions = document.querySelectorAll('.article__introduction');
const $tops = document.querySelectorAll('.tops a');
const $recents = document.querySelectorAll('.recents a');
const $link = document.querySelectorAll('.article__link');
const $titleLink = document.querySelectorAll('.article--big__title')

console.log($recents[0])


export default function getNews() {
    
    const apiKey = 'qT1M4S2fPd1JSAQF0AZL3sg36dqtC1aw';

    const categories = [
        'technology',
        'science',
        'arts',
        /*
        'health',
        'movies',
        'sports',
        'travel'
        */
    ];
    

    const Articles = (n, result) => {
        
        $titles[n].textContent = result.results[0].title;
        $images[n].setAttribute('src', `${result.results[0].multimedia[2].url}`);
        $introductions[n].textContent = result.results[0].abstract;
        
    }

    const rightColumn = (n,n2, n3, result) => {
        $tops[n].textContent = result.results[n2].title;
        $recents[n].textContent = result.results[n3].title;
        $tops[n].setAttribute('href', `${result.results[n2].url}`);
        $recents[n].setAttribute('href', `${result.results[n3].url}`);
        
        
    }

    const Links = (n,result) => {
        
        $link[n].setAttribute('href', `${result.results[0].url}`);
        $titleLink[n].setAttribute('href', `${result.results[0].url}`);    
         
    }


    //tecnologia
    const technologyNews = async n => {
        
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[n]}.json?limit=6&api-key=${apiKey}`);
        const result = await api.json();
        
        Articles(0,result);
        rightColumn(0,1,2,result);
        Links(0,result);        
    }

    // ciencias
    const scienceNews = async n => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[n]}.json?limit=6&api-key=${apiKey}`);
        const result = await api.json();

        Articles(1,result);
        rightColumn(1,2,3,result);
        Links(1,result);      
    }

    //arte
    const artsNews = async n => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[n]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const result = await api.json();
        Articles(2,result);
        rightColumn(2,3,4,result);
        Links(2,result);

    }



    // Noticias sobre salud
    /* 
    const healthNews = async n => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[n]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const result = await api.json();
        
        Articles(3,result);
        rightColumn(3,4,5,result);
        Links(3,result);
    }

    //peliculas
    const moviesNews = async n => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[n]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const result = await api.json();

        console.log(result)
        Articles(4,result);
        rightColumn(4,5,6,result);
        Links(4,result);
    }

    // Noticias sobre deportes
    const sportsNews = async n => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[n]}.json?limit=6&api-key=${apiKey}`);
        const result = await api.json();

        Articles(5,result);
        rightColumn(5,6,7,result);
        Links(5,result);
    
       
    }

    // Noticias sobre viajes
    const travelNews = async n => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${categories[n]}.json?limit=6&api-key=${apiKey}`);

        // Convierte el resultado en objeto
        const result = await api.json();
    
        Articles(6,result);
        rightColumn(6,7,8,result);
        Links(6,result);
    

    }
    */

    technologyNews(0);
    scienceNews(1);
    artsNews(2);
    
    /*
    healthNews(3);
    moviesNews(4);
    sportsNews(5);
    travelNews(6);
    */
}