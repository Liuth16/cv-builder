import { forwardRef } from "react";
import "../styles/CVPreview.css";

const CVPreview = forwardRef(({ data }, ref) => {
  return (
    <div className="cv-preview" ref={ref}>
      <div className="general-info">
        <h2>
          {data.generalInfo.firstName} {data.generalInfo.lastName}
        </h2>
        <p>Email: {data.generalInfo.email}</p>
        <p>Phone: {data.generalInfo.phone}</p>
      </div>

      <div className="education-section">
        <h3>Education</h3>
        {data.education.map((edu, index) => (
          <div key={index} className="education-item">
            <h4>{edu.schoolName}</h4>
            <p>{edu.titleOfStudy}</p>
            <p>{edu.dateOfStudy}</p>
          </div>
        ))}
      </div>
      <div className="experience-section">
        <h3>Professional Experience</h3>
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <h4>{exp.companyName}</h4>
            <p>
              <strong>{exp.positionTitle}</strong>
            </p>
            <p>
              {exp.dateFrom} - {exp.dateUntil}
            </p>
            <p>{exp.mainResponsibilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default CVPreview;
