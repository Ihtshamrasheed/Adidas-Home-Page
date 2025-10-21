
        const topBar = document.getElementById('topBar');
        const topBarClose = document.getElementById('topBarClose');

        topBarClose.addEventListener('click', ()=> {
            topBar.classList.add("hidden")
        })


        
        const indicators = document.querySelectorAll('.indicator');
        const heroTitle = document.getElementById('heroTitle');
        const heroDetail = document.getElementById('heroDetail');
        const leftArrow = document.getElementById('prevSlide');
        const rightArrow = document.getElementById('nextSlide');

        const slides = [
            {
                title: "GET READY for New Adidas bands",
                detail: "Adidas tracks all begin with a starting gate and end with a finish line, but everything in between varies from track to track. Because no two tracks are alike, this action sport keeps you on your toes wherever you are racing."
            },
            {
                title: "UNLEASH the Power of Movement",
                detail: "Every stride, jump, and sprint you make counts. Adidas bands help you train better, recover faster, and push boundaries — no matter your level."
            },
            {
                title: "EXPERIENCE the Next Generation",
                detail: "Built with cutting-edge tech, these bands aren't just for looks. They’re engineered to adapt to your workout style while keeping comfort in check."
            },
            {
                title: "JOIN the Evolution of Fitness",
                detail: "Whether you're a beginner or a pro, Adidas bands are your partner in every goal. Start your journey now and feel the difference in every move."
            }
        ];

        let currentSlide = 0;
        const totalSlides = slides.length;

        function updateSlide(index) {
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === index);
            });

            heroContent.classList.remove('fade');
            void heroContent.offsetWidth; // trigger reflow
            heroContent.classList.add('fade');

            heroTitle.textContent = slides[index].title;
            heroDetail.textContent = slides[index].detail;
        }

        function goToNextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlide(currentSlide);
        }

        function goToPrevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlide(currentSlide);
        }

        rightArrow.addEventListener('click', goToNextSlide);
        leftArrow.addEventListener('click', goToPrevSlide);