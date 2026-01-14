
    // 1. Progress Bar Animation
    const progressBars = document.querySelectorAll('.progress');
    const skillsSection = document.getElementById('skills');

    if(skillsSection) {
        const showProgress = () => {
            progressBars.forEach(bar => {
                const value = bar.getAttribute('data-width');
                bar.style.width = value;
            });
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) showProgress();
            });
        }, { threshold: 0.5 });

        observer.observe(skillsSection);
    }

    // 2. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if(nav) {
            nav.style.background = window.scrollY > 50 ? "rgba(10, 15, 29, 0.95)" : "rgba(15, 23, 42, 0.8)";
        }
    });

    // 3. CORRECTED FORM HANDLING (Only this one function is needed)
    const contactForm = document.getElementById('contactForm');

    

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSfq71pydHMr-H_MfG1MNqb3OIik0IGhlU2UW0EMCsSRxFnWNw/formResponse";

        const nameVal = document.getElementById('name').value;
        const emailVal = document.getElementById('email').value;
        const messageVal = document.getElementById('message').value;

        // Using URLSearchParams for better compatibility with Google Forms
        const params = new URLSearchParams();
        params.append('entry.902905116', nameVal);    
        params.append('entry.208069230', emailVal);   
        params.append('entry.1423342462', messageVal); 

        fetch(formURL, {
            method: 'POST',
            mode: 'no-cors', 
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        })
        .then(() => {
            alert("Thank you! Your message has been sent successfully.");
            contactForm.reset(); 
        })
        .catch((error) => {
            console.error('Submission Error:', error);
            alert("Something went wrong! Please try again.");
        });
    });