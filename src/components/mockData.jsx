const mockData = {
  generalInfo: {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    phone: "+1 (555) 123-4567",
  },
  education: [
    {
      schoolName: "University of Example",
      titleOfStudy: "Bachelor of Science in Computer Science",
      dateOfStudy: "2016 - 2020",
    },
    {
      schoolName: "Example High School",
      titleOfStudy: "High School Diploma",
      dateOfStudy: "2012 - 2016",
    },
  ],
  experience: [
    {
      companyName: "Tech Solutions Inc.",
      positionTitle: "Frontend Developer",
      mainResponsibilities:
        "Built and maintained responsive user interfaces using React and TypeScript.",
      dateFrom: "March 2021",
      dateUntil: "Present",
    },
    {
      companyName: "WebWorks",
      positionTitle: "Junior Developer",
      mainResponsibilities:
        "Assisted in developing internal tools and fixing bugs in client websites.",
      dateFrom: "July 2020",
      dateUntil: "February 2021",
    },
  ],
};

export default mockData;
