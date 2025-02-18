particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 50, 
            "density": {
                "enable": true, 
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#ff00ff", "#00ffff", "#ff6600"] // Purple, Cyan, Orange
        },
        "shape": {
            "type": "circle", 
            "stroke": {
                "width": 0, 
                "color": "#000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.8, 
            "random": true, 
            "anim": {
                "enable": true, 
                "speed": 1.5, 
                "opacity_min": 0.3, 
                "sync": false
            }
        },
        "size": {
            "value": 100, 
            "random": true, 
            "anim": {
                "enable": true, 
                "speed": 7, 
                "size_min": 25, 
                "sync": false
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true, 
            "speed": 5, 
            "direction": "none", 
            "random": true, 
            "straight": false, 
            "out_mode": "out", 
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas", 
        "events": {
            "onhover": {
                "enable": true, 
                "mode": "bubble"
            },
            "onclick": {
                "enable": true, 
                "mode": "repulse"
            }, 
            "resize": true
        }, 
        "modes": {
            "grab": {
                "distance": 350, 
                "line_linked": {
                    "opacity": 1
                }
            }, 
            "bubble": {
                "distance": 250, 
                "size": 60, 
                "duration": 2, 
                "opacity": 0.9, 
                "speed": 2
            },
            "repulse": { 
                "distance": 220, 
                "duration": 0.5 
            }, 
            "push": { 
                "particles_nb": 4 
            }, 
            "remove": { 
                "particles_nb": 2 
            }
        }
    }, 
    "retina_detect": true
});
