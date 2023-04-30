import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import TeacherCard from "./TeacherCard";
import Teachers from "./Teacher";

const Home = () => {
  const [data, setData] = useState();
  const [teacherQuery, setTeacherQuery] = useState("");
  const [subjectQuery, setSubjectQuery] = useState("");
  const [scoreQuery, setScoreQuery] = useState("overall_score");
  const [sortQuery, setSortQuery] = useState("-");
  const [teacherClicked, setTeacherClicked] = useState(false);
  const [clickedName, setClickedName] = useState("");

  function handleClick(event) {
    setClickedName(event.target.textContent);
    setTeacherClicked(true);
  }

  function handleBack(e) {
    setClickedName("");
    setTeacherClicked(false);
  }

  useEffect(() => {
    let sortQuery2 = sortQuery;

    if (scoreQuery === "boring_score") {
      if (sortQuery === "-") {
        sortQuery2 = "";
      } else {
        sortQuery2 = "-";
      }
    }

    let sort = `${sortQuery2 + scoreQuery}`;

    let query = `teacher=${teacherQuery}&subjects=${subjectQuery}&sort=${sort}`;
    axios(`https://ai-teacher-backend-api.vercel.app/api/v1/teachers?${query}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [teacherQuery, subjectQuery, scoreQuery, sortQuery, clickedName]);

  if (teacherClicked) {
    return (
      <div className="container">
        <Teachers
          clickedName={clickedName}
          handleBack={handleBack}
          handleClick={handleClick}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              value={teacherQuery}
              onChange={(e) => setTeacherQuery(e.target.value)}
            />
          </label>
          <div class="subject-category">
            <label for="cars">Filter by Subject:</label>

            <select
              onChange={(e) => {
                setSubjectQuery(e.target.value);
              }}
              className="Subjects"
              aria-label="Subjects"
            >
              <option value="">All Subjects</option>
              <option value="DM">Discrete Mathematics</option>
              <option value="SEPI">SEPI</option>
              <option value="Calculus 2">Calculus 2</option>
              <option value="OOP">Object Oriented Programming</option>
              <option value="CAAL">
                Computer Architecture & Assembly Language
              </option>
              <option value="SCOM">Speech Communication</option>
              <option value="AI">Artificial Intelligence</option>
              <option value="Calculus ">Calculus 1</option>
              <option value="DLD">Digital Logic Design</option>
              <option value="SE">Software Engineering</option>
              <option value="TOA">Theory of Automata</option>
              <option value="LA">Linear Algebra</option>
              <option value="OS">Operating System</option>
              <option value="CCN">Computer Communication & Networks</option>
              <option value="EGC">English Grammar and Composition</option>
              <option value="NUMA">Numerical Analysis</option>
              <option value="ITS">Intro to Statistics</option>
              <option value="ITP">Intro to Programming</option>
              <option value="Physics">Physics</option>
              <option value="DS">Data Structures</option>
              <option value="ITC">Into to Computers</option>
            </select>
          </div>

          <div class="score-category">
            <label for="cars">Filter by Scores:</label>

            <select
              onChange={(e) => {
                setScoreQuery(e.target.value);
              }}
              className="Scores"
              aria-label="Scores"
            >
              <option value="overall_score">Overall Score</option>
              <option value="teaching_score">Teaching</option>
              <option value="grading_score">Grading</option>
              <option value="courseload_score">Courseload</option>
              <option value="boring_score">Vibe</option>
              <option value="chill_score">Chillings</option>
              <option value="std_recom">Student Recommendation</option>
            </select>
          </div>
          <div class="sort-category">
            <label for="sort">Sort by</label>

            <select
              onChange={(e) => {
                setSortQuery(e.target.value);
              }}
              className="sort"
              aria-label="sort"
            >
              <option value="-">Highest to Lowest</option>
              <option value="">Lowest to Highest</option>
            </select>
          </div>
        </div>

        <div>
          {data
            ? data.teachers.map((item) => {
                return (
                  <div>
                    <TeacherCard handleClick={handleClick} teacher={item} />
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
    );
  }
};

export default Home;
