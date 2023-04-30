import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

let subjects = {
  DM: "Discrete Mathematics",
  SEPI: "SEPI",
  "Calculus 2": "Calculus 2",
  OOP: "Object Oriented Programming",
  CAAL: "Computer Architecture & Assembly Language",
  SCOM: "Speec Communication",
  AI: "Artifical Intelligence",
  Calculus: "Calculus",
  DLD: "Digital Logic & Desgin",
  SE: "Software Engineering",
  TOA: "Theory of Automata",
  LA: "Linear Algebra",
  OS: "Operating Systems",
  CCN: "Computer Communication & Networks",
  EGC: "English Grammar & Composition",
  NUMA: "Numerical Analysis",
  ITS: "Intro to Statistics",
  ITP: "Intro to Programming",
  Physics: "Phsyics",
  DS: "Data Structures",
  ITC: "Intro to Computation",
};

let colors = {
  Worst: "#F70000",
  Bad: "#F7A200",
  Fair: "#F7EC00",
  Good: "#2BB400",
  Excellent: "#9BCF34",
  Best: "#9EF700",
};

let handleTeaching = (label) => {
  if (label === "Drop") {
    return colors["Worst"];
  } else if (label === "Avoid") {
    return colors["Bad"];
  } else if (label === "Fair") {
    return colors["Fair"];
  } else if (label === "Good") {
    return colors["Good"];
  } else if (label === "Excellent") {
    return colors["Excellent"];
  } else if (label === "Best") {
    return colors["Best"];
  }
};

let handleGrading = (label) => {
  if (label === "Fail") {
    return colors["Worst"];
  } else if (label === "Bad") {
    return colors["Bad"];
  } else if (label === "Fair") {
    return colors["Fair"];
  } else if (label === "Good") {
    return colors["Good"];
  } else if (label === "Excellent") {
    return colors["Excellent"];
  } else if (label === "Best") {
    return colors["Best"];
  }
};

let handleCourseLoad = (label) => {
  if (label === "Extreme") {
    return colors["Worst"];
  } else if (label === "High") {
    return colors["Bad"];
  } else if (label === "Managable") {
    return colors["Fair"];
  } else if (label === "Normal") {
    return colors["Good"];
  } else if (label === "Less") {
    return colors["Excellent"];
  } else if (label === "None") {
    return colors["Best"];
  }
};

let handleChill = (label) => {
  if (label === "Strict") {
    return colors["Worst"];
  } else if (label === "Not Chill") {
    return colors["Bad"];
  } else if (label === "Normal") {
    return colors["Fair"];
  } else if (label === "Accomodating") {
    return colors["Good"];
  } else if (label === "Friendly") {
    return colors["Excellent"];
  } else if (label === "Jannati") {
    return colors["Best"];
  }
};

let handleBoring = (label) => {
  if (label === "Sleep") {
    return colors["Worst"];
  } else if (label === "Boring") {
    return colors["Bad"];
  } else if (label === "Okayish") {
    return colors["Fair"];
  } else if (label === "Interesting") {
    return colors["Good"];
  } else if (label === "Fun") {
    return colors["Excellent"];
  } else if (label === "Full Chill Scenes") {
    return colors["Best"];
  }
};

let handleOverall = (score) => {
  if (score <= 1) {
    return colors["Worst"];
  } else if (score <= 2) {
    return colors["Bad"];
  } else if (score <= 3) {
    return colors["Fair"];
  } else if (score <= 4) {
    return colors["Good"];
  } else if (score <= 5) {
    return colors["Best"];
  }
};

let handleStudentLabel = (score) => {
  if (score <= 1) {
    return "Worst";
  } else if (score <= 2) {
    return "Bad";
  } else if (score <= 3) {
    return "Fair";
  } else if (score <= 4) {
    return "Good";
  } else if (score <= 5) {
    return "Best";
  }
};

const TeacherCard = ({ teacher, handleClick }) => {
  const value = teacher.overall_score.toFixed(1);
  const teaching_color = handleTeaching(teacher.teaching_l);
  const grading_color = handleGrading(teacher.grading_l);
  const courseload_color = handleCourseLoad(teacher.courseload_l);
  const chill_color = handleChill(teacher.chill_l);
  const boring_color = handleBoring(teacher.boring_l);
  const overall_color = handleOverall(teacher.overall_score);
  const std_recom_color = handleOverall(teacher.std_recom * 5);
  const std_recom_l = handleStudentLabel(teacher.std_recom * 5);

  return (
    <div className="card container">
      <div className="NameSubs">
        <h1 onClick={handleClick} className="teacher">
          {teacher.teacher}
        </h1>
        {teacher.subjects.map((sub) => {
          return <p>{subjects[sub]}</p>;
        })}
      </div>
      <div className="scoreboard">
        <div className="scoreboard-1">
          <div className="metric">
            <h4 className="metric-title">Teaching</h4>
            <h4 style={{ color: teaching_color }} className="metric-label">
              {teacher.teaching_l}
            </h4>
            <h4
              style={{ backgroundColor: teaching_color }}
              className="metric-score"
            >
              {teacher.teaching_score.toFixed(1)}
            </h4>
          </div>
          <div className="metric">
            <h4 className="metric-title">Grading</h4>
            <h4 style={{ color: grading_color }} className="metric-label">
              {teacher.grading_l}
            </h4>
            <h4
              style={{ backgroundColor: grading_color }}
              className="metric-score"
            >
              {teacher.grading_score.toFixed(1)}
            </h4>
          </div>
          <div className="metric">
            <h4 className="metric-title">Course Load</h4>
            <h4 style={{ color: courseload_color }} className="metric-label">
              {teacher.courseload_l}
            </h4>
            <h4
              style={{ backgroundColor: courseload_color }}
              className="metric-score"
            >
              {teacher.courseload_score.toFixed(1)}
            </h4>
          </div>
        </div>
        <div className="scoreboard-2">
          <div className="metric">
            <h4 className="metric-title">Chillings</h4>
            <h4 style={{ color: chill_color }} className="metric-label">
              {teacher.chill_l}
            </h4>
            <h4
              style={{ backgroundColor: chill_color }}
              className="metric-score"
            >
              {teacher.chill_score.toFixed(1)}
            </h4>
          </div>
          <div className="metric">
            <h4 className="metric-title">Vibe</h4>
            <h4 style={{ color: boring_color }} className="metric-label">
              {teacher.boring_l}
            </h4>
            <h4
              style={{ backgroundColor: boring_color }}
              className="metric-score"
            >
              {(5 - teacher.boring_score.toFixed(1)).toFixed(1)}
            </h4>
          </div>
          <div className="metric">
            <h4 className="metric-title">Std Recom</h4>
            <h4 style={{ color: std_recom_color }} className="metric-label">
              {std_recom_l}
            </h4>
            <h4
              style={{ backgroundColor: std_recom_color }}
              className="metric-score"
            >
              {(teacher.std_recom * 5).toFixed(1)}
            </h4>
          </div>
        </div>
      </div>
      <div className="overall-score">
        <div class="bar" style={{ width: 150, height: 150 }}>
          <CircularProgressbar
            value={value}
            maxValue={5}
            minValue={0}
            text={`${value}`}
            styles={buildStyles({
              pathColor: overall_color,
              textColor: overall_color,
              trailColor: "white",
            })}
          />
        </div>
        <h3>Overall Score</h3>
      </div>
    </div>
  );
};

export default TeacherCard;
