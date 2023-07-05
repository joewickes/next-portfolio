// Component(s)
import Experience from '@/components/Experience';

// Context(s)
import { ExperiencesContext } from '@/context/ExperienceContext';

const Experiences = () => {
  return (
    <ExperiencesContext.Consumer>
      {(value) => {
        return (
          <div className='w-screen px-7'>
            {value?.experiences?.map((experience: any) => {
              return (
                <Experience
                  key={`experience-${experience?.experienceId}`}
                  experienceId={experience?.experienceId}
                  experienceTitle={experience?.experienceTitle}
                  experienceMonthYearStart={
                    experience?.experienceMonthYearStart
                  }
                  experienceMonthYearEnd={experience?.experienceMonthYearEnd}
                  experienceTechnologies={experience?.experienceTechnologies}
                  experienceResponsibilities={
                    experience?.experienceResponsibilities
                  }
                  experienceBusinessName={experience?.experienceBusinessName}
                />
              );
            })}
          </div>
        );
      }}
    </ExperiencesContext.Consumer>
  );
};

export default Experiences;
