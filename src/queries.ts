export const GetProjectsQuery = `query GetProjects {
  projects {
    data {
      id
      attributes {
        title
        content
        carousel {
          data {
            attributes {
              alternativeText
              name
              url
            }
          }
        }
      }
    }
  }
}`;

export const GetGithubQuery = `query GetGithub {
  github {
    data {
      id
      attributes {
        url
      }
    }
  }
}`;

export const GetLinkedInQuery = `query GetLinkedIn {
  linkedIn {
    data {
      id
      attributes {
        url
      }
    }
  }
}`;

export const GetPDFQuery = `query GetPDF {
  pdf {
    data {
      id
      attributes {
        pdf {
          data {
            id
            attributes {
              alternativeText
              name
              url
            }
          }
        }
      }
    }
  }
}`;

export const GetExperiencesQuery = `query GetExperiences {
  experiences {
    data {
      id
      attributes {
        title
        business_name
        month_year_start
        month_year_end
        responsibilities
        technologies
      }
    }
  }
}`;
