import './Head.css';

function Head({scrollClick}){

    return(
        <div className="head-container">
            <div className='center'>
                <div className='square-landscape'>
                    <img src="./img/profile_picture/user2_picture.png" className="user-picture" alt='I'></img>
                    <div className="blur-effect"></div>
                </div>
                <h2>Jaime Ismael Carcedo Galindo</h2>
                <h1>Desarrollador web fullstack</h1> 
                <div className='header-buttons-container'>   
                    <label onClick={()=>scrollClick(1)}>Sobre mi</label>
                    <label onClick={()=>scrollClick(2)}>Proyectos</label>
                    <label onClick={()=>scrollClick(3)}>Experiencia</label>
                </div>
            </div>
        </div>
        
    )
}
export default Head;