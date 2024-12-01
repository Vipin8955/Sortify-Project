// Fetch and Display Testimonials
fetch('testimonials.json')
    .then(response => response.json())
    .then(data => {
        const testimonialsContainer = document.querySelector('.cards');
        data.forEach((testimonial, index) => {
            const card = document.createElement('div');
            card.classList.add('testimonial-card');
            card.style.display = index === 0 ? 'block' : 'none';
            card.innerHTML = `
                <img src="${testimonial.photo}" alt="Client Photo">
                <h4>${testimonial.name}</h4>
                <p>${testimonial.profession}</p>
                <p>"${testimonial.review}"</p>
                <div class="rating">${testimonial.rating}</div>
            `;
            testimonialsContainer.appendChild(card);
        });
    });

// Testimonials Slider
let currentTestimonial = 0;
function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function previousTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Initialize first testimonial and start auto-slide
setTimeout(() => showTestimonial(currentTestimonial), 100); // Wait for fetch
setInterval(nextTestimonial, 1000);