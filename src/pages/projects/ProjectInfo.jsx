function ProjectInfo({text, link, stack}){
    
    return(
        <div className='projects-col projects-description'>
            <div className='projects-top'>
                {text.map((txt)=>{
                                
                    return(
                        <p key={txt}>{txt}</p>
                    )
            })}
                
            </div>
            <div className='projects-bottom'>
                <a href={link} target="_blank">
                    <div className="github-button">
                        <div className='button-image-center'>
                            <img  src='./img/icons/git_secondary_blue.svg' alt="Github"></img>

                        </div>
                        <label>Código</label>
                    </div>
                </a>
                <div className='container-stack right'>
                {stack.map((stck)=>{
                                
                    return(
                        <img src={'./img/icons/'+stck+'.svg'} key={stck} alt={stck}></img>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default ProjectInfo;