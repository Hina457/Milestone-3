var form = document.getElementById('Resume-form');
var resumedisplayElement = document.getElementById('resume-display');
//Subission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect input value
    var Name = document.getElementById('name').value;
    var Email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var CNIC = document.getElementById('cnic').value;
    var Education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var Skills = document.getElementById('Skills').value;
    //Generate the REsume
    var resumeHTML = "\n     <h2><b> Editable Resume</b></h2>\n     <h4>Profile picture</h4>\n   \n    <h3>Personal Information</h3>\n\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(Name, "</span></p>\n     <p><b>Email:</b> <span contenteditable=\"true\"").concat(Email, "</span></p>\n      <p><b>Phone:</b> <span contenteditable=\"true\"").concat(phone, "</span></p>\n       <p><b>Cnic:</b> <span contenteditable=\"true\"").concat(CNIC, "</span></p>\n\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(Education, "</p>\n\n       <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(Experience, "</p>\n\n       <h3>Experience</h3>\n    <p contenteditable=\"true\">").concat(Skills, "</p>\n    ");
    //Display the generated Resume
    if (resumedisplayElement) {
        resumedisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
