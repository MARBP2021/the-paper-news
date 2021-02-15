import {
    
    $title1, 
    $title2, 
    $title3, 
    $title4, 
    $title5, 
    $title6, 
    $title7,

    $image1,
    $image2,
    $image3,
    $image4,
    $image5,
    $image6,
    $image7,
    
    $description1,
    $description2,
    $description3,
    $description4,
    $description5,
    $description6,
    $description7,

    $topNews1,
    $topNews2,
    $topNews3,
    $topNews4,
    $topNews5,

    $recentNews1,
    $recentNews2,
    $recentNews3,
    $recentNews4,
    $recentNews5




}   from './noticias.js';


export const Api = () => {


    const apiKey = 'qT1M4S2fPd1JSAQF0AZL3sg36dqtC1aw';
    const section = {
        science: 'science',
        technology: 'technology',
        arts: 'arts',
        health: 'health',
        politics: 'politics',
        sports: 'sports',
        travel: 'travel',
        world: 'world'


    }
    
    const {arts, books, health, politics, science, sports, technology, travel, world} = section;

    //noticias de ciencia.
    const technologyNews = async () => {
        //ESTAS VARIABLES SE DECLARAN PARA QUE FORMEN PARTE DEL SCOPE DE ESTA MISMA FUNCION, SINO SE DECLARAN QUEDARAN COMO "undefined", ya que javascript no las encuentra.
        $image1;
        $title1;
        $description1;
        $recentNews1;
        //peticion GET a la URL
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${technology}.json?api-key=${apiKey}`)                                //apiKey //categoria = salud //paises = estados unidos, UK,  // lenguajes de las noticias = ingles.
        //el resultado se convierte a JSON
        

        //AQUI SE EXTRAE EL CONTENIDO DE LA RESPUESTA(TITULO,IMAGEN,DESCRIPCION)
        const result = await api.json();
        const {results} = result;
        const title = results[3].title;
        const image = results[3].multimedia[2].url;
        const description = results[3].abstract;
        
        //AQUI ESTAN LOS METODOS QUE REEMPLAZAN EL CONTENIDO DEL HTML
        $title1.textContent = title;
        $image1.setAttribute('src', `${image}`)
        $description1.textContent = description;
        $topNews1.textContent = title;
        $recentNews1.textContent = title;

    }
    
    // estas funciones mandan a llamar una URL(api), la cual trae una noticia y de esta extraemos la descripcion y el titulo.
    
    
    //science
    const scienceNews = async () => {
        
        $image2;
        $title2;
        $description2;
        $topNews2;
        $recentNews2;


        //peticion GET a la URL
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${science}.json?api-key=${apiKey}`)                                //apiKey //categoria = salud //paises = estados unidos, UK,  // lenguajes de las noticias = ingles.
        //el resultado se convierte a JSON
        const result = await api.json();
        
        
        const {results} = result;
        const title = results[3].title;
        const image = results[3].multimedia[2].url;
        const description = results[3].abstract;
        
        $title2.textContent = title;
        $image2.setAttribute('src', `${image}`)
        $description2.textContent = description;
        $topNews2.textContent = title;
        $recentNews2.textContent = title;
    }

    //noticias de negocios
    const artsNews = async () => {
        $image3;
        $title3;
        $description3;
        $topNews3;
        $recentNews3;
        //peticion GET a la URL
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${arts}.json?api-key=${apiKey}`)                                //apiKey //categoria = salud //paises = estados unidos, UK,  // lenguajes de las noticias = ingles.
        //el resultado se convierte a JSON
        const result = await api.json();
        const {results} = result;
        const title = results[3].title;
        const image = results[3].multimedia[2].url;
        const description = results[3].abstract;
        $title3.textContent = title;
        $image3.setAttribute('src', `${image}`)
        $description3.textContent = description;
        $topNews3.textContent = title;
        $recentNews3.textContent = title;

    
    }




    const healthNews = async () => {
        
        $image4;
        $title4;
        $description4;
        $topNews4;
        $recentNews4;
        
        //peticion GET a la URL
        
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${health}.json?api-key=${apiKey}`)                                //apiKey //categoria = salud //paises = estados unidos, UK,  // lenguajes de las noticias = ingles.
        //el resultado se convierte a JSON
        const result = await api.json();
        
        const {results} = result;
        const title = results[3].title;
        const image = results[3].multimedia[2].url;
        const description = results[3].abstract;
        
        $title4.textContent = title;
        $image4.setAttribute('src', `${image}`)
        $description4.textContent = description;
        $topNews4.textContent = title;
        $recentNews4.textContent = title;
    
    }

    const worldNews = async () => {
        
        $image5;
        $title5;
        $description5;
        $topNews5;
        $recentNews5;
        
        
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${world}.json?api-key=${apiKey}`)                         
        
        
        const result = await api.json();
        const {results} = result;
        const title = results[2].title;
        const image = results[2].multimedia[2].url;
        const description = results[2].abstract;
        
        $title5.textContent = title;
        $image5.setAttribute('src', `${image}`)
        $description5.textContent = description;
        $topNews5.textContent = title;
        $recentNews5.textContent = title;
        
        
    
    }

    const sportsNews = async () => {
        $image6;
        $title6;
        $description6;
      

        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${sports}.json?api-key=${apiKey}`)                   
        const result = await api.json();
        const {results} = result;
        const title = results[3].title;
        const image = results[3].multimedia[2].url;
        const description = results[3].abstract;
        
        $title6.textContent = title;
        $image6.setAttribute('src', `${image}`)
        $description6.textContent = description;
    
    }

    const travelNews = async () => {
        
        $image7;
        $title7;
        $description7;
     
        //peticion GET a la URL
        const api = await fetch (`https://api.nytimes.com/svc/news/v3/content/all/${travel}.json?api-key=${apiKey}`)                                //apiKey //categoria = salud //paises = estados unidos, UK,  // lenguajes de las noticias = ingles.
        //el resultado se convierte a JSON
        const result = await api.json();
        const {results} = result;
        const title = results[3].title;
        const image = results[3].multimedia[2].url;
        const description = results[3].abstract;
        
        $title7.textContent = title;
        $image7.setAttribute('src', `${image}`)
        $description7.textContent = description;
        

    }








    
    technologyNews();
    scienceNews();
    artsNews();
    healthNews();
    worldNews();
    sportsNews();
    travelNews();
}