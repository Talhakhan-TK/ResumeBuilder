// app.ts  

interface Education {  
    degree: string;  
    institution: string;  
    year: string;  

}  

interface Experience {  
    jobTitle: string;  
    company: string;  
    duration: string;  
}  

interface ResumeData {  
    dp: File | null;
    name: string;  
    url: string;
    tagline: string;
    email: string;  
    phone:  string;
    location: string;  
    education: Education[];  
    education2: string ;
    experience: Experience[];  
    experience2: string  ;
    skills: string[];  
}  

// Function to handle form submission  
let handleFormSubmission = () => {  
    // Get user input values  
    const inputElement = document.getElementById('dp') as HTMLInputElement;  
        const dp: File | null = inputElement.files ? inputElement.files[0] : null;  
            if (dp) {  
                console.log(dp.name);
             } else {  
                 console.log('No file selected');  
             }  
    const name = (document.getElementById('name') as HTMLInputElement).value;  
    const url = (document.getElementById('url') as HTMLInputElement).value;  
    const tagline = (document.getElementById('tagline') as HTMLInputElement).value;  
    const email = (document.getElementById('email') as HTMLInputElement).value;  
    const phone = (document.getElementById('phone') as HTMLInputElement).value;  
    const location = (document.getElementById('location') as HTMLInputElement).value;  

    // Collecting education input  
    const educationFields = document.querySelectorAll('.educationFields input');  
    const education: Education[] = [];  

    for (let i = 0; i < educationFields.length; i += 3) {  
        if (i + 2 < educationFields.length) {  
            const degree = (educationFields[i] as HTMLInputElement).value;  
            const institution = (educationFields[i + 1] as HTMLInputElement).value;  
            const year = (educationFields[i + 2] as HTMLInputElement).value;  

            if (degree && institution && year) {  
                education.push({ degree, institution, year });  
         }  
        }  
    }    const education2 = (document.getElementById('education') as HTMLTextAreaElement).value 


    // Collecting experience input  
    const experienceFields = document.querySelectorAll('.experienceFields input')
    const experience: Experience[] = [];  

    for (let i = 0; i < experienceFields.length; i += 3) {  
        if (i + 2 < experienceFields.length) {  
            const jobTitle = (experienceFields[i] as HTMLInputElement).value;  
            const company = (experienceFields[i + 1] as HTMLInputElement).value;  
            const duration = (experienceFields[i + 2] as HTMLInputElement).value;  

            if (jobTitle && company && duration) {  
                experience.push({ jobTitle, company, duration });  
            }  
        }  
    }  
    const experience2 = (document.getElementById('experience')as HTMLTextAreaElement).value

    // Collecting skills  
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());  



    // Creating resume data object  
    const resumeData: ResumeData = {  
        dp,
        name,  
        tagline,
        url,
        email,  
        phone,  
        location,  
        education,
        education2,  
        experience,  
        experience2, 
        skills  
    };  

  
    // Store the data in localStorage  
    localStorage.setItem('resumeData', JSON.stringify(resumeData));  
    

    
    // Redirect to resume page  
    window.location.href = 'resume.html';  





// Select all elements with the 'editable' class  
const editableSections = document.querySelectorAll<HTMLElement>('.editable');  

        // Function to handle click events and enable editing  
        function makeEditable(section: HTMLElement) {  
        section.addEventListener('click', () => {  
        section.contentEditable = 'true'; // Enable editing  
        section.focus(); // Focus on the section being edited  
    });  
    section.addEventListener('blur', () => {  
        section.contentEditable = 'false'; // Disable editing when focus is lost  
        // Optionally, you can save changes here if needed, for example, to a server  
        console.log(`Updated content for ${section.id}: ${section.innerText}`);  
    });  
}  

// Attach the editable functionality to each section  
editableSections.forEach(section => {  
    makeEditable(section);  
})



;}
