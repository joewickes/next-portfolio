// Component(s)
import Project from './Project';

// Context(s)
import { ProjectsContext } from '@/context/ProjectsContext';

const Projects = () => {
  return (
    <ProjectsContext.Consumer>
      {(value) => {
        return (
          <div className='w-screen px-7'>
            {value?.projects?.map((project: any) => {
              return (
                <Project
                  key={`project-${project?.projectId}`}
                  projectId={project?.projectId}
                  projectName={project?.projectName}
                  projectDescription={project?.projectDescription}
                  projectGifId={project?.projectGifId}
                  projectGifName={project?.projectGifName}
                  projectGifAlt={project?.projectGifAlt}
                  projectGifUrl={project?.projectGifUrl}
                />
              );
            })}
          </div>
        );
      }}
    </ProjectsContext.Consumer>
  );
};

export default Projects;
