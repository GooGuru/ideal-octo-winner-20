import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      image: 'path-to-project1-image.jpg',
      deployedLink: 'https://project1.com',
      repoLink: 'https://github.com/your-profile/project1',
    },
    {
      title: 'Project 2',
      image: 'path-to-project2-image.jpg',
      deployedLink: 'https://project2.com',
      repoLink: 'https://github.com/your-profile/project2',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
