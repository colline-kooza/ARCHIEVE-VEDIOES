const savedArchievedVedios=JSON.parse(localStorage.getItem("archieved"))
let archievedvedeos=savedArchievedVedios?savedArchievedVedios:[];

function displayArchieved(archievedvedeos){
    console.log(archievedvedeos)
    const archievedContainer=document.getElementById("archieved-container")
    console.log(archievedContainer)
    archievedvedeos.forEach((archievedvedeo)=>{
        const creatTemplate=`
        <div class="video-card">
        <iframe width="360" height="300" src="https://www.youtube.com/embed/${archievedvedeo.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        `;
        archievedContainer.insertAdjacentHTML("beforeend",creatTemplate)
        
    })
  }
  displayArchieved(archievedvedeos)