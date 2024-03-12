import './Experience.css';
// import { useRef } from 'react';
import ExperienceCard from './ExperienceCard.jsx'

const acceleralia_text = [
    "Desarrolle una web compleja de la propia empresa desde cero utilizando Laravel y Vue.",
    "Aporte optimizando código de los compañeros y compartiendo nuevas ideas de desarrollo.",
    "Aprendí metodologías ágiles y testing unitario, aparte de mejorar mis habilidades al programar."
]
const stack = [
    'vue',
    'laravel'
]
function Experience(){
    
    return(
        <div id='experience-section' className='experience-section'>
            <div className='experience-title'>
                <h2>Experiencia</h2>
            </div>
            <div className="experience-container">
                <ExperienceCard logo="./img/experience/acceleralia.svg" company="Acceleralia" work="Desarrollador Fullstack" text={acceleralia_text} date="2020-2023" mode="Remoto" stack={stack}></ExperienceCard>
            </div>
        </div>

    )
}
export default Experience;