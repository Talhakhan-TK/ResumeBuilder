// app.ts  
// Function to handle form submission  
var handleFormSubmission = function () {
    // Get user input values  
    var inputElement = document.getElementById('dp');
    var dp = inputElement.files ? inputElement.files[0] : null;
    if (dp) {
        console.log(dp.name);
    }
    else {
        console.log('No file selected');
    }
    var name = document.getElementById('name').value;
    var url = document.getElementById('url').value;
    var tagline = document.getElementById('tagline').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var location = document.getElementById('location').value;
    // Collecting education input  
    var educationFields = document.querySelectorAll('.educationFields input');
    var education = [];
    for (var i = 0; i < educationFields.length; i += 3) {
        if (i + 2 < educationFields.length) {
            var degree = educationFields[i].value;
            var institution = educationFields[i + 1].value;
            var year = educationFields[i + 2].value;
            if (degree && institution && year) {
                education.push({ degree: degree, institution: institution, year: year });
            }
        }
    }
    var education2 = document.getElementById('education').value;
    // Collecting experience input  
    var experienceFields = document.querySelectorAll('.experienceFields input');
    var experience = [];
    for (var i = 0; i < experienceFields.length; i += 3) {
        if (i + 2 < experienceFields.length) {
            var jobTitle = experienceFields[i].value;
            var company = experienceFields[i + 1].value;
            var duration = experienceFields[i + 2].value;
            if (jobTitle && company && duration) {
                experience.push({ jobTitle: jobTitle, company: company, duration: duration });
            }
        }
    }
    var experience2 = document.getElementById('experience').value;
    // Collecting skills  
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    // Creating resume data object  
    var resumeData = {
        dp: dp,
        name: name,
        tagline: tagline,
        url: url,
        email: email,
        phone: phone,
        location: location,
        education: education,
        education2: education2,
        experience: experience,
        experience2: experience2,
        skills: skills
    };
    // Store the data in localStorage  
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    // Redirect to resume page  
    window.location.href = 'resume.html';
    // Select all elements with the 'editable' class  
    var editableSections = document.querySelectorAll('.editable');
    // Function to handle click events and enable editing  
    function makeEditable(section) {
        section.addEventListener('click', function () {
            section.contentEditable = 'true'; // Enable editing  
            section.focus(); // Focus on the section being edited  
        });
        section.addEventListener('blur', function () {
            section.contentEditable = 'false'; // Disable editing when focus is lost  
            // Optionally, you can save changes here if needed, for example, to a server  
            console.log("Updated content for ".concat(section.id, ": ").concat(section.innerText));
        });
    }
    // Attach the editable functionality to each section  
    editableSections.forEach(function (section) {
        makeEditable(section);
    });
};
