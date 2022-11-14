console.log('Website of breaking news');


// Grab the news container

let newsContainer = document.getElementById('accordionExample')

// Variables for source and api key
let country = 'us';
let apikey = '34f30253c76949c1b63cacb1133c46fa'

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apikey}`, true);
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        //console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element , index) {
            let news = `<div class="card">
            <div class="card-header" id="${index}">
                <h2 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                        <b>Breaking News ${index+1}:</b> ${element["title"]}
                    </button>
                </h2>
            </div>

            <div id="collapse${index}" class="collapse " aria-labelledby="headingOne"
                data-parent="#accordionExample">
                <div class="card-body">
                ${element["content"]}.  <a href="${element["url"]}" target="_blank">Read more here</a></div>
            </div>
         </div>`
            newsHtml += news;

            newsContainer.innerHTML = newsHtml;
        });
    }
    else {
        console.log('Error found!')
    }

};

xhr.send();
