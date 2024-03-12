import './AboutMe.css';

function AboutMe(){
    return(
        <div id='aboutme-section' className='main-section'>
            <div className='wrapper'>
                <div className='grid grid1'>
                    
                        <h3>Soy <span className='color-text'>Jaime</span>,</h3>
                        <p>
                            Un desarrollador con grandes ganas de superarse cada día. Encontré el desarrollo web de casualidad, me puse a estudiarlo y a día de hoy se ha convertido en mi pasión.
                        </p>
                        <p>
                            Lo que más me gusta de programar sería encontrar nuevas formas más óptimas de desarrollar el mismo código.
                        </p>
                    
                </div>
                <div className='grid grid2'>
                    <div className="circular-landscape">
                        <img src="./img/profile_picture/user_picture.png" alt="I"></img>
                    </div>
                    
                </div>
                <div className='grid grid3'>
                    <h1>2+</h1>
                    <p>Años experiencia laboral</p>
                </div>
                <div className='grid grid4'>
                    <img src='./img/misc/sagrada_familia.png' className="barcelona-image" alt="Sagrada Familia"></img>

                    <p className='barcelona-text'>BARCELONA</p>
                </div>
                <div className='grid grid5'>
                    
                    <div className='scroll scroll1'>
                        <div>
                            <span>Organizado</span>
                            <span>Empático</span>
                            <span>Trabajador en equipo</span>
                            <span>Asertivo</span>
                            
                        </div>
                        <div>
                            <span>Organizado</span>
                            <span>Empático</span>
                            <span>Trabajador en equipo</span>
                            <span>Asertivo</span>
                            
                        </div>
                        
                    </div>
                    <div className='scroll scroll2'>
                        <div>
                            
                            <span>Razonamiento analítico</span>
                            <span>Capacidad de aprendizaje</span>
                            <span>Adaptable</span>
                        </div>
                        <div>
                            
                            <span>Razonamiento analítico</span>
                            <span>Capacidad de aprendizaje</span>
                            <span>Adaptable</span>
                        </div>
                        
                    </div>
                    
                    
                </div>
                <div className='grid grid6'>
                <h3>Contacto</h3>
                    <div className='contact-container'>
                        <img className="mail-icon" src='./img/icons/gmail.svg' alt='Gmail'></img>
                        <p>jaimecgfg@gmail.com</p>
                    </div>
                    <div className='contact-container'>
                        <a className='contact-button' href='https://www.linkedin.com/in/jaime-ismael-carcedo-galindo-8724701b7/' target="_blank"> 
                            <img className="contact-icon" src='./img/icons/linkedin_secondary.svg' alt='Linkedin'></img>
                            <p>LinkedIn</p>
                        </a>
                        <a className='contact-button' href='https://github.com/jaimecll' target="_blank"> 
                            <img className="contact-icon" src='./img/icons/git_secondary.svg' alt='Github'></img>
                            <p>Github</p>
                        </a>
                        <a className='contact-button' href='./CV/CV-Jaime_Ismael_Carcedo_Galindo.pdf' target="_blank"> 
                            <img className="contact-icon pdf-icon" src='./img/icons/pdf.svg' alt='CV'></img>
                            <p>Porfolio</p>
                        </a>
                    </div>
                </div>
                <div className='grid grid7'>
                <h3>Tech Stack</h3>
                    <div className='tech-stack-container'>
                        <img className="stack-icon stack1" src='./img/icons/react.svg' alt='React'></img>
                        <img className="stack-icon stack2" src='./img/icons/vue.svg' alt='Vue'></img>
                        <img className="stack-icon stack3" src='./img/icons/angular.svg' alt='Angular'></img>
                        <img className="stack-icon stack4" src='./img/icons/laravel.svg' alt='Laravel'></img>
                        <img className="stack-icon stack5" src='./img/icons/js.svg' alt='JavaScript'></img>
                        <img className="stack-icon stack6" src='./img/icons/css.svg' alt='CSS'></img>
                        <img className="stack-icon stack7" src='./img/icons/html.svg' alt='HTML'></img>
                        <img className="stack-icon stack8" src='./img/icons/mysql.svg' alt='MySQL'></img>
                        <img className="stack-icon stack9" src='./img/icons/java.svg' alt='Java'></img>
                        
                    </div>
                </div>
                <div className='grid grid8'>
                <h3>Herramientas</h3>
                    <div className='tech-stack-container'>
                        <img className="stack-icon stack1" src='./img/icons/visual_studio.svg' alt='Visual Studio Code'></img>
                        <img className="stack-icon stack2" src='./img/icons/github.svg' alt='Github'></img>
                        <img className="stack-icon stack3" src='./img/icons/figma.svg' alt='Figma'></img>
                        <img className="stack-icon stack4" src='./img/icons/bootstrap.svg' alt='Bootstrap'></img>

                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
export default AboutMe;