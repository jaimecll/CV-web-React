function ProjectImage({link, style}){
    
    return(
        <>
        <img src={link} className={style} alt={style + " website"}></img>
        </>


    )
}
export default ProjectImage;