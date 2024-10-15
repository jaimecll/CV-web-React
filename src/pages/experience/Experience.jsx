import './Experience.css';
// import { useRef } from 'react';
import ExperienceCard from './ExperienceCard.jsx'

const acceleralia_text = [
    "Desarrolle una web compleja de la propia empresa desde cero utilizando Laravel y Vue.",
    "Aporte optimizando código de los compañeros y compartiendo nuevas ideas de desarrollo.",
    "Aprendí metodologías ágiles y testing unitario, aparte de mejorar mis habilidades al programar."
]
const aubay_text = [
    "Trabajando para cliente tefpay (Pasarela de pago).",
    "Desarrollé una aplicación de creación html gráfica para formularios de cobro.",
    "Nada mas entrar en la empresa optimicé el codigo existente mejorando la calidad de su producto.",
]
const stack = [
    'vue',
    'laravel'
]
const stack_aubay = [
    'js',
    'laravel'
]
function Experience(){
    
    return(
        <div id='experience-section' className='experience-section'>
            <div className='experience-title'>
                <h2>Experiencia</h2>
            </div>
            <div className="experience-container">
                <ExperienceCard animation="experience-card show-left" logo="./img/experience/acceleralia.svg" company="Acceleralia" work="Desarrollador Fullstack" text={acceleralia_text} date="2020-2023" mode="Remoto" stack={stack}></ExperienceCard>
            </div>
            <div className="experience-container">
                <ExperienceCard animation="experience-card show-right" logo="./img/experience/aubay.svg" company="Aubay" work="Desarrollador Fullstack" text={aubay_text} date="2024-Actualidad" mode="Presencial" stack={stack_aubay}></ExperienceCard>
            </div>
        </div>

    )
}
export default Experience;