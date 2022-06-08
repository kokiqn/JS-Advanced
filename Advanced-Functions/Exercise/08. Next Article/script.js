function getArticleGenerator(articles) {
    return function () {
        if (articles.length) {
            let contentDiv = document.getElementById('content');
            let articleElement = document.createElement('article');
            articleElement.textContent = articles.shift();
            contentDiv.appendChild(articleElement);
        }
    }
}
