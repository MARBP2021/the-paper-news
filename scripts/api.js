import {
    
    $title1, 
    $title2, 
    $title3, 
    $title4, 
    $title5, 
    $title6, 
    $title7,
    $image1,
    $description1,
    $description2,
    $description3,
    $description4,
    $description5,
    $description6,
    $description7

} from './noticias.js';


export const Api = () => {


    const apiKey = 'qT1M4S2fPd1JSAQF0AZL3sg36dqtC1aw';
    const section = {
        arts: 'arts',
        books: 'books',
        health: 'health',
        politics: 'politics',
        science: 'science',
        sports: 'sports',
        technology: 'technology',
        travel: 'travel',
        home: 'home'

    }
    
    const {arts, books, health, politics, science, sports, technology, travel, home} = section;

    //noticias de ciencia.
    const scienceNews = async () => {
        
        $image1;
        $title1;
        $description1;
        //peticion GET a la URL
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${science}.json?api-key=${apiKey}`)                                //apiKey //categoria = salud //paises = estados unidos, UK,  // lenguajes de las noticias = ingles.
        //el resultado se convierte a JSON
        const result = await api.json();
        const {results} = result;
        const title = results[3].title;
        const image = results[3].multimedia[2].url;
        const description = results[3].abstract;
        $title1.textContent = title;
        $image1.setAttribute('src', `${image}`)
        $description1.textContent = description;

    }
    
    // estas funciones mandan a llamar una URL(api), la cual trae una noticia y de esta extraemos la descripcion y el titulo.
    
    
    //noticias de tecnologia
    const technologyNews = async () => {
    
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${technology}.json?api-key=${apiKey}`);
        const result = await api.json();
        const {results} = result;
        const title = results[2].title;
        const image = results[2].multimedia[2].url;
        const description = results[2].description;
        console.log(title)

    }
    //noticias de negocios
    const politicsNews = async () => {
        
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${travel}.json?api-key=${apiKey}`);
        const result = await api.json();
        const {results} = result;
        const title = results[2].title;
        const image = results[2].multimedia[2].url;
        const description = results[2].description;
        console.log(title)
    
    }
    
    scienceNews();
    technologyNews();
    politicsNews();
    
}