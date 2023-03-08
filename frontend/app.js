// function to fetch articles from the backend and update the page
export async function getArticles(section) {
    try {
        const response = await fetch(`http://localhost:3000/articles/${section}`);
        const data = await response.json();

        // get the articles container element
        const articlesContainer = document.querySelector('.articles-container');

        // Clear articles container
        articlesContainer.innerHTML = '';

        // Create HTML for each article
        data.results.forEach((article) => {
            const articleHTML = `
        <div class="card">
          <img src="${article.multimedia[0].url}" alt="${article.title}">
          <div class="container">
            <h2>${article.title}</h2>
            <p>${article.abstract}</p>
            <a href="${article.url}" target="_blank">Read More</a>
          </div>
        </div>
      `;
            articlesContainer.insertAdjacentHTML('beforeend', articleHTML);
        });
    } catch (error) {
        console.error(error);
    }
}
