import './Body.css';
import Head from '../../pages/head/Head.jsx'
import AboutMe from '../../pages/about_me/AboutMe.jsx';
import Proyectos from '../projects/Proyectos.jsx';
import Experience from '../experience/Experience.jsx';
import Footer from '../footer/Footer.jsx';

import {useRef} from 'react';



function Body(){
    const aboutRef = useRef();
    const projectsRef = useRef();
    const experienceRef = useRef();

    const scrollClick = (index) => {
        
        switch (index){
            case 1:
                aboutRef.current?.scrollIntoView({behavior: 'smooth'})
                break;
            case 2:
                projectsRef.current?.scrollIntoView({behavior: 'smooth'})

                break;
            case 3:
                experienceRef.current?.scrollIntoView({behavior: 'smooth'})

                break;
            default:
                break;
        }
    }
    return(
        <div className="body-container">
            <Head scrollClick={scrollClick}></Head> 

            <div ref={aboutRef}>
                <AboutMe ></AboutMe>
            </div>
            <div ref={projectsRef}>
                <Proyectos></Proyectos>
            </div>
            <div ref={experienceRef}>
                <Experience></Experience>
            </div>
            <div>
                <Footer scrollClick={scrollClick}></Footer>
            </div>
        </div>
        
    )
}
export default Body;