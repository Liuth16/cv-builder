import InputField from "./InputField";
import "../styles/CVForm.css";

function CVForm({
  data,
  onGeneralChange,
  onEducationChange,
  onExperienceChange,
  onAddEducation,
  disabled,
}) {
  return (
    <div className="cv-form">
      <section className="form-section">
        <h2>General Information</h2>
        <InputField
          label="First Name"
          id="firstName"
          name="firstName"
          type="text"
          value={data.generalInfo.firstName}
          onChange={onGeneralChange}
          disabled={disabled}
        />
        <InputField
          label="Last Name"
          id="lastName"
          name="lastName"
          type="text"
          value={data.generalInfo.lastName}
          onChange={onGeneralChange}
          disabled={disabled}
        />
        <InputField
          label="Email"
          id="email"
          name="email"
          type="email"
          value={data.generalInfo.email}
          onChange={onGeneralChange}
          disabled={disabled}
        />
        <InputField
          label="Phone"
          id="phone"
          name="phone"
          type="tel"
          value={data.generalInfo.phone}
          onChange={onGeneralChange}
          disabled={disabled}
        />
      </section>

      <section className="form-section">
        <h2>Education</h2>
        <button onClick={onAddEducation}>Add education</button>
        {data.education.map((edu, index) => (
          <div key={index} className="education-form-group">
            <h3>Education #{index + 1}</h3>
            <InputField
              label="School Name"
              id={`school-${index}`}
              name={`schoolName`}
              type="text"
              value={edu.schoolName}
              onChange={(e) => onEducationChange(e, index)}
              disabled={disabled}
            />
            <InputField
              label="Title of Study"
              id={`study-${index}`}
              name={`titleOfStudy`}
              type="text"
              value={edu.titleOfStudy}
              onChange={(e) => onEducationChange(e, index)}
              disabled={disabled}
            />
            <InputField
              label="Date of Study"
              id={`date-${index}`}
              name={`dateOfStudy`}
              type="text"
              value={edu.dateOfStudy}
              onChange={(e) => onEducationChange(e, index)}
              disabled={disabled}
            />
          </div>
        ))}
      </section>

      <section className="form-section">
        <h2>Professional Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="experience-form-group">
            <h3>Experience #{index + 1}</h3>
            <InputField
              label={"Company Name"}
              id={`company-${index}`}
              name={`companyName`}
              type="text"
              value={exp.companyName}
              onChange={(e) => onExperienceChange(e, index)}
              disabled={disabled}
            />
            <InputField
              label={"Position Title"}
              id={`position-${index}`}
              name={`positionTitle`}
              type="text"
              value={exp.positionTitle}
              onChange={(e) => onExperienceChange(e, index)}
              disabled={disabled}
            />
            <InputField
              label={"Main Responsibilities"}
              id={`responsibilities-${index}`}
              name={`mainResponsibilities`}
              type="textarea"
              value={exp.mainResponsibilities}
              onChange={(e) => onExperienceChange(e, index)}
              disabled={disabled}
            />
            <InputField
              label={"From"}
              id={`from-${index}`}
              name={`dateFrom`}
              type="text"
              value={exp.dateFrom}
              onChange={(e) => onExperienceChange(e, index)}
              disabled={disabled}
            />
            <InputField
              label={"Until"}
              id={`until-${index}`}
              name={`dateUntil`}
              type="text"
              value={exp.dateUntil}
              onChange={(e) => onExperienceChange(e, index)}
              disabled={disabled}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default CVForm;
