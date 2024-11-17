

const form = document.getElementById('Resume-form') as HTMLFormElement;
const ResumedisplayElement = document.getElementById('resume-display') as HTMLDivElement;

//Subission
form.addEventListener('submit',(event: Event)=>{
    event.preventDefault();

    //collect input value
    const Name =(document.getElementById('name')as HTMLInputElement).value
    const Email =(document.getElementById('email')as HTMLInputElement).value
    const phone =(document.getElementById('phone')as HTMLInputElement).value
    const CNIC =(document.getElementById('cnic')as HTMLInputElement).value
    const Education =(document.getElementById('education')as HTMLInputElement).value
    const Experience =(document.getElementById('experience')as HTMLInputElement).value
    const Skills =(document.getElementById('Skills')as HTMLInputElement).value


    //Generate the REsume

    const resumeHTML  = `
     <h2><b>Resume</b></h2>
     <h4>Profile picture</h4>
    <img src="${profilepic.src}"alt="profile picture"/>
    <h3>Personal Information</h3>
    <p><b>Name:</b>${Name}</p>
     <p><b>Email:</b>${Email}</p>
      <p><b>Phone:</b>${phone}</p>
       <p><b>Cnic:</b>${CNIC}</p>


    <h3>Experience</h3>
    <p>${Education}</p>

       <h3>Experience</h3>
    <p>${Experience}</p>

       <h3>Experience</h3>
    <p>${Skills}</p>
    `;

    //Display the generated Resume

    if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.');
        
    }
});