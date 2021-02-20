const $titles = document.querySelectorAll('.article__title a');
const $images = document.querySelectorAll('.image');
const $introductions = document.querySelectorAll('.article__introduction');
const $links = document.querySelectorAll('.article__link');
const $tops = document.querySelectorAll('.tops a');
const $recents = document.querySelectorAll('.recents a');

export default function getNews() {
    const apiKey = 'qT1M4S2fPd1JSAQF0AZL3sg36dqtC1aw';

    const categories = {
        technology: 'technology',
        health: 'health',
        arts: 'arts'
    }

    const { technology, health, arts } = categories;

    const drawArticles = (index, result) => {
        $titles[index].innerText = result.results[0].title;
        $titles[index].setAttribute('href', `${result.results[0].url}`);
        $images[index].setAttribute('src', `${result.results[0].multimedia[2].url}`);
        $introductions[index].innerText = result.results[0].abstract;
        $links[index].setAttribute('href', `${result.results[0].url}`);
    }

    const drawLinks = (index, result) => {
        $tops[index].innerText = result.results[index + 1].title;
        $tops[index].setAttribute('href', `${result.results[index + 1].url}`);
        $recents[index].innerText = result.results[index + 2].title;
        $recents[index].setAttribute('href', `${result.results[index + 2].url}`);
    }

    const loadNews = async (category, article, index) => {
        const api = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/${category}.json?limit=6&api-key=${apiKey}`);

        const result = await api.json();
        console.log(result)

        drawArticles(article, result);
        drawLinks(index, result);
    }

    loadNews(technology, 0, 0);
    loadNews(health, 1, 1);
    loadNews(arts, 2, 2);
}