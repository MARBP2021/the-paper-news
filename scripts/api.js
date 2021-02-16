const $titles = document.querySelectorAll('.article__title a');
const $images = document.querySelectorAll('.image');
const $introductions = document.querySelectorAll('.article__introduction');
const $tops = document.querySelectorAll('.tops a');
const $recents = document.querySelectorAll('.recents a');
const $link = document.querySelectorAll('.article__link');
const $titleLink = document.querySelectorAll('.article--big__title')



export default function getNews() {
    
    const apiKey = 'qT1M4S2fPd1JSAQF0AZL3sg36dqtC1aw';

    const categories = {
        technology: 'technology',
        science: 'science',
        arts: 'arts'

    }

    const {technology, science, arts} = categories;
    

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

    
    const News = async (category, ArticleNum,rC1,rC2,rC3,LinkNum) => {
        
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${category}.json?limit=6&api-key=${apiKey}`);
        const result = await api.json();
        
        Articles(ArticleNum,result);
        rightColumn(rC1,rC2,rC3,result);
        Links(LinkNum,result);

    }
    

    News(technology,0,1,2,3,0);
    News(science,1,2,3,4,1)
    News(arts,2,3,4,5,2);
    
}