document.addEventListener('DOMContentLoaded', function() {
    // Disable scrolling and selection
    document.body.style.overflow = 'hidden';
    document.addEventListener('scroll', function(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    });

    // Initialize particles.js with smooth interactivity
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: "#c4b998"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                }
            },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.2,
                    sync: false
                }
            },
            size: {
                value: 4,
                random: true,
                anim: {
                    enable: true,
                    speed: 1.5,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 120,
                color: "#c4b998",
                opacity: 0.4,
                width: 1.2
            },
            move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: true,
                    rotateX: 800,
                    rotateY: 1600
                }
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 120,
                    line_linked: {
                        opacity: 0.8
                    }
                },
                bubble: {
                    distance: 200,
                    size: 20,
                    duration: 1,
                    opacity: 0.8,
                    speed: 2
                },
                repulse: {
                    distance: 80,
                    duration: 0.6
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });

    // Load Lottie animation with matching color scheme
    const animationContainer = document.getElementById('lottie-animation');
    const animationData = {
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets5.lottiefiles.com/packages/lf20_vybwn7df.json'
    };
    lottie.loadAnimation(animationData);

    // Countdown timer with Persian numbers
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 90); // Set 90 days from now

    function toPersianNumber(number) {
        const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        return number.toString().replace(/\d/g, (d) => persianDigits[d]);
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = toPersianNumber(days.toString().padStart(2, '0'));
        document.getElementById('hours').textContent = toPersianNumber(hours.toString().padStart(2, '0'));
        document.getElementById('minutes').textContent = toPersianNumber(minutes.toString().padStart(2, '0'));
        document.getElementById('seconds').textContent = toPersianNumber(seconds.toString().padStart(2, '0'));
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Random progress animation
    const progressPercent = document.getElementById('progress-percent');
    const progressBar = document.querySelector('.progress-bar::after');
    let progress = 65;
    let direction = 1;

    setInterval(() => {
        progress += direction * Math.random() * 0.5;
        if (progress > 70) direction = -1;
        if (progress < 60) direction = 1;
        progressPercent.textContent = toPersianNumber(Math.round(progress));
        document.querySelector('.progress-bar::after').style.width = `${progress}%`;
    }, 3000);
});