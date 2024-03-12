import './Projects.css';
import { useState }  from 'react'
// import { useRef } from 'react';
import ProjectImage from './ProjectImage.jsx'
import ProjectInfo from './ProjectInfo.jsx'


function Proyectos(){
    const [background,setBackground]=useState('cartelera');
    const [title,setTitle]=useState('Cartelera de películas');
    const [images,setImages]=useState(
        
            [
                {
                    id:1,
                    link:'./img/projects/movies/browser.png',
                    style:'browser',
                },
                {
                    id:2,
                    link:'./img/projects/movies/mobile.png',
                    style:'mobile',
                },
                {
                    id:3,
                    link:'./img/projects/movies/tablet.png',
                    style:'tablet',
                },
            ]
        
        
    );
    const [description,setDescription]=useState(
        {
            text:[
                'Cartelera de estrenos con puntuación e información de estas, así como los actores y una sinopsis. Dispone de un filtro de búsqueda sencillo.',
                'Proyecto con angular conectado con la API TMDB(The Movie DataBase)'
            ],
            link:'https://github.com/jaimecll/App-cartelera-de-peliculas',
            stack:[
                'angular',
                'bootstrap'
            ],
        }
    );
    const calculatorClick = () => {
        setTitle('Calculadora')
        setBackground('calculadora');
        setImages(
            [
                {
                    id:1,
                    link:'./img/projects/calculator/tablet.png',
                    style:'full-tablet',
                }
            ]
        )
        setDescription(
            {
                text:[
                    'Calculadora funcional desarrollada como proyecto para aprender React.',
                    'Funciones: Suma, resta, división, multiplicación y porcentaje.'
                ],
                link:'https://github.com/jaimecll/calculadora',
                stack:[
                    'react',
                ],
            }
        )
    }
    const carteleraClick = () => {
        setTitle('Cartelera de películas')
        setBackground('cartelera');
        setImages(
            [
                {
                    id:1,
                    link:'./img/projects/movies/browser.png',
                    style:'browser',
                },
                {
                    id:2,
                    link:'./img/projects/movies/mobile.png',
                    style:'mobile',
                },
                {
                    id:3,
                    link:'./img/projects/movies/tablet.png',
                    style:'tablet',
                },
            ]
        )
        setDescription(
            {
                text:[
                    'Cartelera de estrenos con puntuación e información de estas, así como los actores y una sinopsis. Dispone de un filtro de búsqueda sencillo.',
                    'Proyecto con angular conectado con la API TMDB(The Movie DataBase)'
                ],
                link:'https://github.com/jaimecll/App-cartelera-de-peliculas',
                stack:[
                    'angular',
                    'bootstrap'
                ],
            }
        )
    }
    

    return(
        <div id='projects-section' className='projects-section'>
            <div className='projects-title'>
                <h2>Proyectos: <span className='color-text'>{title}</span></h2>
            </div>
            <div className='projects-wrapper'>
                <div className='projects-col projects-selector'>
                    <button className={'project-button ' + (background=='cartelera'?'selected-button':'')}  onClick={carteleraClick}>Cartelera de peliculas</button>
                    <button className={'project-button ' + (background=='calculadora'?'selected-button':'')} onClick={calculatorClick}>Calculadora web</button>

                </div>
             
                    <div>
                        <div className={'projects-col projects-image '+ background}>
                            {images.map((image)=>{
                                
                                return(
                                    <ProjectImage link={image.link} style={image.style} key={image.link}></ProjectImage>
                                )
                            })}
                
                        </div>
                        <ProjectInfo text={description.text} link={description.link} stack={description.stack}></ProjectInfo>
                        
                    </div>

                
            </div>
        </div>
        )
    }
export default Proyectos;