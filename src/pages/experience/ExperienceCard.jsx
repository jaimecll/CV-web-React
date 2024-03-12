function ExperienceCard({logo, company, work, text, date, mode,stack}){
    
    return(
        <div className="experience-card show-left">
            <div className="experience-info left">
                <img src={logo} alt="Company Logo"></img>
                <h3>{company}</h3>
                <p>{date}</p>
            
                
            </div>
            <div className="experience-text left">
                <h3><span className="color-text">{work}</span> | {mode}</h3>
                
                {text.map((txt)=>{
                                
                    return(
                        <p key={txt}>&#183; {txt}</p>
                    )
                })}
                
                <div className="right">
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
export default ExperienceCard;