'use client';

// Component(s)
import ProjectsList from '@/components/ProjectsList';
import ExperiencesList from '@/components/ExperiencesList';

const Home = () => {
  return (
    <>
      <main className='flex flex-col'>
        <ProjectsList />
        <ExperiencesList />
      </main>
    </>
  );
};

export default Home;
