import './Footer.css';
// import { useRef } from 'react';

function Footer({ scrollClick }){
   
    return(
        <div className='footer-section'> 
                <div className='div-50'>
                    <h2 className='footer-title'>Contactame:</h2>
                    <p className='footer-text'>jaimecgfg@gmail.com</p>
                </div>
                <div className='div-50'>
                    <p className='footer-links' onClick={()=>scrollClick(1)}>Sobre mi</p>
                    <p className='footer-links' onClick={()=>scrollClick(2)}>Proyectos</p>
                    <p className='footer-links' onClick={()=>scrollClick(3)}>Experiencia</p>
                </div>
            </div>

    )
}
export default Footer;