function addElement(podcast,number){

    // Creating the HTML card element
    let htmlElement = '<div class="row podcast-card mt-3">'+
        '<div class="col-12 col-sm-2">'+
            '<div class="podcast-number">'+number+'</div>'+
        '</div>'+
        '<div class="row col-12 col-sm-10 shadow-container">'+
            '<div class="col-4 col-sm-3 podcast-image">'+
                '<img src="'+podcast.image+'">'+
            '</div>'+
            '<div class="col-8 col-sm-5 podcast-resume">'+
                '<h2 class="podcast-title">'+podcast.title+'</h2>'+
                '<div class="podcast-authors">by <span class="authors-names">'+podcast.publisher+'</span></div>'+
                '<div class="podcast-episodes">'+podcast.total_episodes+' Episodes</span></div>'+
                '<hr>'+
                '<div class="podcast-links">'+
                    '<span class="itunes">'+
                        '<img src="/wp-content/plugins/podcast-api/public/assets/img/apple.svg">'+
                        '<a href="https://itunes.com/'+podcast.itunes_id+'">ITUNES</a>'+
                    '</span>'+
                    '<span class="website ml">'+
                        '<img src="/wp-content/plugins/podcast-api/public/assets/img/link.svg">'+
                        '<a href="'+podcast.website+'">WEB</a>'+
                    '</span>'+
                    '<span class="rss ml">'+
                        '<img src="/wp-content/plugins/podcast-api/public/assets/img/rss.svg">'+
                        '<a href="'+podcast.rss+'">RSS</a>'+
                    '</span>'+
                '</div>'+
            '</div>'+
            '<div class="col-12 col-sm-4 podcast-description">'+
                podcast.description+
            '</div>'+
        '</div>'+
        '</div>';

    return htmlElement
}

window.addEventListener("DOMContentLoaded",function(){

    fetch("/wp-content/plugins/podcast-api/public/assets/api/response.json",
    {
        method: "GET"
    }
    )
    .then(res=>res.json())
    .then(json=>{
        let limit = 5
        // We are using top 5, in case we get less set the loop limit on max number of podcasts
        if (json.podcasts.length < 5) {
            limit = json.podcasts.length
        }
        // Getting the main cointainer provided by shortcode
        let container = document.getElementById('podcast-blocks')
        //initializing html
        let html =''
        for (let i = 0; i < limit; i++) {
            html += addElement(json.podcasts[i],i+1)
        }
        //Appending the html
        container.innerHTML = html
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    })
    
})