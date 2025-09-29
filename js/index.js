
        // Initialize Swiper
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });

        // Form Validation
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Reset error states
            document.querySelectorAll('.input').forEach(input => {
                input.classList.remove('error');
            });
            
            // Validate first name
            const fname = document.getElementById('fname');
            if (!fname.value.trim()) {
                document.getElementById('fname-error').style.display = 'block';
                fname.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate last name
            const lname = document.getElementById('lname');
            if (!lname.value.trim()) {
                document.getElementById('lname-error').style.display = 'block';
                lname.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('email-error').style.display = 'block';
                email.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate terms
            const terms = document.getElementById('terms');
            if (!terms.checked) {
                document.getElementById('terms-error').style.display = 'block';
                terms.parentElement.classList.add('error');
                isValid = false;
            }
            
            if (isValid) {
                alert('Form submitted successfully!');
                this.reset();
            }
        });
        
        // Real-time validation for fields
        document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(input => {
            input.addEventListener('input', function() {
                if (this.parentElement.classList.contains('error')) {
                    this.parentElement.classList.remove('error');
                    const errorId = this.id + '-error';
                    if (document.getElementById(errorId)) {
                        document.getElementById(errorId).style.display = 'none';
                    }
                }
            });
        });
