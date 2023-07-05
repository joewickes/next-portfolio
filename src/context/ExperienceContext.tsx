'use client';
import { createContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

import { GetExperiencesQuery } from '@/queries';

type ExperienceItemType = {
  id?: string;
  title?: string;
  technologies?: string;
  responsibilities?: string;
  business_name?: string;
  month_year_start?: string;
  month_year_end?: string;
} | null;

type ExperiencesContextType = {
  experiences?: ExperienceItemType[] | null;
  experiencesSet?: any;
} | null;

export const ExperiencesContext = createContext<ExperiencesContextType>(null);

const Context = ({ children }: { children?: ReactNode }) => {
  const [experiences, experiencesSet] = useState(null);

  const getExperiences = async () => {
    try {
      axios({
        url: `${process.env.NEXT_PUBLIC_API_URL}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
        method: 'post',
        data: {
          query: GetExperiencesQuery,
        },
      }).then((result) => {
        const experiencesArray = result?.data?.data?.experiences?.data
          .sort((a, b) => a.id > b.id)
          .map((experience: any) => {
            return {
              experienceId: experience?.id,
              experienceTitle: experience?.attributes?.title,
              experienceMonthYearStart:
                experience?.attributes?.month_year_start,
              experienceMonthYearEnd: experience?.attributes?.month_year_end,
              experienceTechnologies: experience?.attributes?.technologies,
              experienceResponsibilities:
                experience?.attributes?.responsibilities,
              experienceBusinessName: experience?.attributes?.business_name,
            };
          });

        experiencesSet(experiencesArray);
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <ExperiencesContext.Provider value={{ experiences, experiencesSet }}>
      {children}
    </ExperiencesContext.Provider>
  );
};

export default Context;
