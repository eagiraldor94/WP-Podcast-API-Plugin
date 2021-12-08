function createElementRender(){

}

window.addEventListener("DOMContentLoaded",function(){

    fetch("/wp-content/plugins/podcast-api/public/assets/api/response.json",
    {
        method: "GET"
    }
    )
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
    })
    .catch(err=>{
        console.log(`Error: ${err}`)
    })
    
})