const submit=document.getElementById("submitBtn")
console.log(submit)

const fillVedioTitle=document.getElementById("fill-vedio-title")
console.log(fillVedioTitle)
const vedioID=document.getElementById("fill-vedio-id")
console.log(vedioID)
const vedioThambnail=document.getElementById("fill-vedio-thambnail")
console.log(vedioThambnail)
// const vedios=[]

const savedVedios=JSON.parse(localStorage.getItem("vedios"))
let vedios=savedVedios?savedVedios:[];
console.log(vedios)

// const archieved=[];

const savedArchievedVedios=JSON.parse(localStorage.getItem("archieved"))
let archievedvedeos=savedArchievedVedios?savedArchievedVedios:[];

console.log(archievedvedeos)


const menuBar=document.getElementById("menu-icon")
console.log(menuBar)
const nav=document. querySelector ("nav")
console.log(nav)

menuBar.addEventListener("click", barchicked)
function barchicked(){
  nav.classList.add("addNav")
}

const remove=document.getElementById("bar-remove")
console.log(remove)
remove.addEventListener("click",removebtn)
function removebtn(){
  nav.classList.remove("addNav")

}


submit.addEventListener("click",LinkInput)

function LinkInput(){
    console.log("btn clicked")
   
  const vedio={
    videoTitle :fillVedioTitle.value,
    videoId : vedioID.value,
    videoThambnail :vedioThambnail.value
  }
  vedios.push(vedio)
   
   localStorage.setItem('vedios',JSON.stringify(vedios));
   displayData(vedios)

 
}
console.log(vedios)


function displayData(vedios){
    // console.log(vedios)
    const main=document.querySelector(".container")
    
     main.innerHTML=" ";
    vedios.forEach((vedio)=>{
        // console.log(vedio)
       
        const creatTemplate=`<div class="video-card">
        <iframe width="160" height="400" src="https://www.youtube.com/embed/${vedio.videoId}" title="${vedio.videoTitle}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="buttons">
                <button data-id=${vedio.videoId} class="btns">Archive</button>
                <button>copy</button>
                <a href="${vedio.videoThambnail }" download>Download</a>
            </div>
        </div>
        `;
   
    console.log(main)
    main.insertAdjacentHTML("beforeend",creatTemplate)
    })
      
    const btns=document.querySelectorAll(".btns")
    console.log(btns)
    

    const message=document.querySelector(".message")
    console.log(message)
    message.style.display="none";
      btns.forEach((btn)=>{
       btn.addEventListener("click",(event)=>{
           const vedioId=event.target.dataset.id;
           console.log(vedios)
           const video =vedios.find((video)=>video.videoId==vedioId);
           console.log(video)
         
           archievedvedeos.push(video)

           localStorage.setItem('archieved',JSON.stringify(archievedvedeos));
           console.log(archievedvedeos)

            message.style.display="flex";
            setTimeout((()=>{
              message.style.display="none";
            }),3000)
            
         })
   })

}
displayData(vedios)



