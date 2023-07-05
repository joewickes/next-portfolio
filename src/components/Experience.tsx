type ExperienceItemType = {
  experienceId?: string | null;
  experienceTitle?: string | null;
  experienceMonthYearStart?: string | null;
  experienceMonthYearEnd?: string | null;
  experienceTechnologies?: string | null;
  experienceResponsibilities?: string | null;
  experienceBusinessName?: string | null;
};

const Experience = ({
  experienceId,
  experienceTitle,
  experienceMonthYearStart,
  experienceMonthYearEnd,
  experienceTechnologies,
  experienceResponsibilities,
  experienceBusinessName,
}: ExperienceItemType) => {
  return (
    <>
      <div className='w-full px-8'>
        <h2>Experience {experienceId}</h2>
        <div>Experience Title: {experienceTitle}</div>
        <div>Experience Business Name: {experienceBusinessName}</div>
        <div>Experience start: ${experienceMonthYearStart}</div>
        <div>Experience end: {experienceMonthYearEnd}</div>
        <div>Experience Technologies: {experienceTechnologies}</div>
        <div style={{ whiteSpace: 'pre-line' }}>
          Experience responsibilities: {experienceResponsibilities}
        </div>
      </div>
    </>
  );
};

export default Experience;
