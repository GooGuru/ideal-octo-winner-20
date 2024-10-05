function Project({ title, image, deployedLink, repoLink }) {
    return (
      <div className="project">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Application</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    );
  }
  
  export default Project;
  