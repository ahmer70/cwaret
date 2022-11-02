import React,{useState,useEffect} from 'react'

import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
const Particlesanimation = () => {
  
  const [width, setWidth]   = useState(null);

const updateDimensions = () => {
    setWidth(window.innerWidth<766?40:80);

}
useEffect(() => {
  setWidth(window.innerWidth<766?40:80);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
      }, []);

      const ParticlesConfig = {
        autoplay: true,
        fullScreen: {
          enable: true,
          zIndex: 9999,
        },
        particles: {
          number: {
            value: {width},
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#5fc7ed',
          },
          shape: {
            type: 'circle',
            
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 2 },
          },
          rotate: {
            value: 0,
            random: false,
            direction: 'clockwise',
            animation: {
              enable: false,
              speed: 5,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#71a1d0',
            opacity: 0.4,
            width: 2,
          },
        
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: ['grab'],
             
              distance: 100,
            },
            onclick: {
              enable: false,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            attract: {
                
              
                duration: 2,
                opacity: 8,
                speed: 3,
              },
            grab: {
              distance: 100,
              
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
            Wobble:{
                enable:false
            }
          },
        },
        retina_detect: true,
        background: {
          color: '#fff',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
      };
  return (
    <div>
        <div id='particle-background'>
        <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{"fullScreen": {
        "enable": true,
        "zIndex": -1
      },interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "attract",
          },
          "resize": true
        },
        modes: {
            "attract": {
              "distance": 330,
              "duration": 0.1,
              "easing": "ease-out-cubic",
              "factor": 1,
              "maxSpeed": 1,
              "speed": 3
            },
        }
      },
      particles: {
        number:width,
        color: {
          value: "#a0abfd"
        },
        links: {
          color: {
            value: "#a0abfd"
          },
          distance:200,
          frequency:0.4,
          enable: true,
          opacity: 0.5
        },
        
        move: {
          enable: true
        },
        opacity: {
          value: 0.5
        },
        size: {
            value: { min: 1, max: 3 },
          },
      }}}
    />
    </div>
      
    </div>
  )
}

export default Particlesanimation