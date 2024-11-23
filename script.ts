

const form= document.getElementById('Resume-form') as HTMLFormElement;
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
     <h2><b> Editable Resume</b></h2>
    
    <h3>Personal Information</h3>

    <p><b>Name:</b><span contenteditable="true">${Name}</span></p>
     <p><b>Email:</b> <span contenteditable="true"${Email}</span></p>
      <p><b>Phone:</b> <span contenteditable="true"${phone}</span></p>
       <p><b>Cnic:</b> <span contenteditable="true"${CNIC}</span></p>


    <h3>Experience</h3>
    <p contenteditable="true">${Education}</p>

       <h3>Experience</h3>
    <p contenteditable="true">${Experience}</p>

       <h3>Experience</h3>
    <p contenteditable="true">${Skills}</p>
    `;

    //Display the generated Resume

    if(resumedisplayElement){
        resumedisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing.');
        
    }
});