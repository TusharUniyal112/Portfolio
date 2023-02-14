let createh3 = document.createElement("h3")//ist h3 of ist div
let createpara = document.createElement("p")// ist p of ist div
let buttonForResume = document.createElement("button")
let ResumeAncorTag = document.createElement("a")
let img1 = document.createElement("img")
let createh3p2 =document.createElement("h3")//2nd h3 of 2nd div
let createparap2 = document.createElement("a")// 2nd ancor  of 2nd div

let jod = document.querySelector(".me")
window.addEventListener("scroll",function(){
let poi=window.scrollY
            if(poi>50){

           jod.classList.add("full")
            // adding about us text in div
            createh3.innerText="About us"
            createh3.setAttribute("id","isth3")
            jod.appendChild(createh3)
            // adding about us description text in div
            createpara.innerText="I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, Advance Javascript and continuously engage in trying to extend my skills with new technology."
            jod.appendChild(createpara)
            createpara.setAttribute("id","istpara")
            //adding and creating of query and descustion text in div  
            createh3p2.innerText="Any Type Of Query & Discussion"
            createh3p2.setAttribute("id","h3p2")
            jod.appendChild(createh3p2)

            // adding ancor add text in div
            createparap2.innerText="tusharuniyalji@gmail.com"
            createparap2.setAttribute("href","mailto:tusharuniyalji@htmlhints.com")
            createparap2.setAttribute("id","parap2")
            jod.appendChild(createparap2)
            //creating a button and then put a ancor tag inside hi,m
            buttonForResume.innerText="Download Resume"
            buttonForResume.setAttribute("id","btn-resume")
            ResumeAncorTag.setAttribute("href","https://drive.google.com/file/d/11y_pkajeTk50indBnrOe7Lr7v7q5EIJZ/view?usp=share_link")
            ResumeAncorTag.setAttribute("id","resanc")
            ResumeAncorTag.appendChild(buttonForResume)
            jod.appendChild(ResumeAncorTag)
             // adding some more css optional
             img1.src="https://www.linkpicture.com/q/शीर्षक-रहित_डिज़ाइन_1_-removebg-preview_1.png"
             img1.setAttribute("id","img1")
             jod.appendChild(img1)
            }   
})



// manupulating dom of green div
let div1ofGreendiv=document.createElement("div")
let div2ofGreendiv=document.createElement("div")
let maindivofgreen=document.createElement("div")
let headingoffirstdiv=document.createElement("h4")
let beachlorheading = document.createElement("h5")
let beachlordescription = document.createElement("p")
let schoolheading = document.createElement("h5")
let schooldescription = document.createElement("p")
//skill div elelments
let skillsheading=document.createElement("h5")
let htmltext= document.createElement("h4")
let csstext= document.createElement("h4")
let javascripttext= document.createElement("h4")
let reacttext= document.createElement("h4")
let imgroot = document.createElement("img")




let pod = document.querySelector(".skill")
window.addEventListener("scroll",function (){
    let road=window.scrollY

    if(road>20){
   pod.classList.add("null")
   //education div
   imgroot.src="https://www.linkpicture.com/q/root-plant-cartoon-vector-symbol-icon-design-beautiful-illustr-illustration-isolated-white-background-94022885-removebg-preview.png"
   maindivofgreen.appendChild(imgroot)
   maindivofgreen.appendChild(div1ofGreendiv)
   div1ofGreendiv.setAttribute("id","div1ofGreend")
   headingoffirstdiv.innerText="EDUCATION"

   beachlorheading.innerText="IBachelors's in Computer Application"
   beachlordescription.innerText="Pursuing my undergraduate Indira Gandhi National Open University, completing in 2025 "

   schoolheading.innerText="Senior Secondary School,CBSE,New Delhi"
   schooldescription.innerText="Completed my high-schooling withPython from Gagan Bharti Sr. Sec.School"
   
   div1ofGreendiv.appendChild(headingoffirstdiv)
   div1ofGreendiv.appendChild(beachlorheading)
   div1ofGreendiv.appendChild(beachlordescription)
   div1ofGreendiv.appendChild(schoolheading)
   div1ofGreendiv.appendChild(schooldescription)

   // skills div 
   maindivofgreen.appendChild(div2ofGreendiv)
   div2ofGreendiv.setAttribute("id","div2ofGreend")
   skillsheading.innerText="SKILLS"
   htmltext.innerText="HTML5"
   csstext.innerText="css3"
   javascripttext.innerText="JAVA-SCRIPT"
   div2ofGreendiv.appendChild(skillsheading)
   div2ofGreendiv.appendChild(htmltext)
   div2ofGreendiv.appendChild(csstext)
   div2ofGreendiv.appendChild(javascripttext)
maindivofgreen.setAttribute("id","maindivedsc")
   pod.appendChild(maindivofgreen)

}
})