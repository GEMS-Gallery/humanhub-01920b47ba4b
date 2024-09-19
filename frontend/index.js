import { backend } from 'declarations/backend';

async function loadCompanyInfo() {
    try {
        const companyInfo = await backend.getCompanyInfo();
        
        document.getElementById('companyName').textContent = `Welcome to ${companyInfo.name}`;
        document.getElementById('missionStatement').textContent = companyInfo.mission;
        
        const valuesList = document.getElementById('valuesList');
        companyInfo.values.forEach(value => {
            const li = document.createElement('li');
            li.textContent = value;
            valuesList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading company info:', error);
    }
}

async function loadJobOpenings() {
    try {
        const jobOpenings = await backend.getJobOpenings();
        const jobList = document.getElementById('jobList');
        jobOpenings.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.innerHTML = `<h3>${job.title}</h3><p>${job.description}</p>`;
            jobList.appendChild(jobDiv);
        });
    } catch (error) {
        console.error('Error loading job openings:', error);
    }
}

async function loadBenefits() {
    try {
        const benefits = await backend.getBenefits();
        const benefitsList = document.getElementById('benefitsList');
        benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading benefits:', error);
    }
}

async function loadTestimonials() {
    try {
        const testimonials = await backend.getTestimonials();
        const testimonialsList = document.getElementById('testimonialsList');
        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.innerHTML = `<blockquote>${testimonial.quote}</blockquote><p>- ${testimonial.name}, ${testimonial.role}</p>`;
            testimonialsList.appendChild(testimonialDiv);
        });
    } catch (error) {
        console.error('Error loading testimonials:', error);
    }
}

async function loadFAQ() {
    try {
        const faq = await backend.getFAQ();
        const faqList = document.getElementById('faqList');
        faq.forEach(item => {
            const faqDiv = document.createElement('div');
            faqDiv.innerHTML = `<h3>${item.question}</h3><p>${item.answer}</p>`;
            faqList.appendChild(faqDiv);
        });
    } catch (error) {
        console.error('Error loading FAQ:', error);
    }
}

async function submitContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        const response = await backend.submitContactForm(name, email, message);
        alert(response);
        document.getElementById('contactForm').reset();
    } catch (error) {
        console.error('Error submitting contact form:', error);
        alert('There was an error submitting your message. Please try again later.');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

window.addEventListener('load', () => {
    loadCompanyInfo();
    loadJobOpenings();
    loadBenefits();
    loadTestimonials();
    loadFAQ();
    document.getElementById('contactForm').addEventListener('submit', submitContactForm);
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
});
