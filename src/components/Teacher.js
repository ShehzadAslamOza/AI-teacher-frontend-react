import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TeacherCard from "./TeacherCard";
import Comment from "./Comment";

const Comments = ({ handleBack, clickedName }) => {
  const [data, setData] = useState();
  const [comments, setComments] = useState();
  const [similarTeachers, setSimilarTeachers] = useState();
  const [name, setName] = useState(clickedName);

  let handleClick = (event) => {
    setName(event.target.textContent);
  };

  useEffect(() => {
    axios(
      `https://ai-teacher-backend-api.vercel.app/api/v1/teachers?teacher=${name}`
    )
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });

    axios(
      `https://ai-teacher-backend-api.vercel.app/api/v1/comments?teacher=${name}`
    )
      .then((response) => {
        console.log(response.data);
        setComments(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
    axios(
      `https://ai-teacher-backend-api.vercel.app/api/v1/similarity?teacher=${name}`
    )
      .then((response) => {
        console.log(response.data);
        setSimilarTeachers(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [name]);

  return (
    <div className="card-container">
      <button className="BackBtn" onClick={handleBack}>
        Back
      </button>
      {data ? (
        <TeacherCard teacher={data.teachers[0]} handleClick={handleClick} />
      ) : (
        "loading"
      )}
      <h2>Comments</h2>
      {comments
        ? comments.comments.map((comment) => <Comment comment={comment} />)
        : "loading"}
      <h1>Similar Teachers</h1>
      {similarTeachers
        ? similarTeachers.allTeachers.map((item) => {
            return (
              <div>
                <TeacherCard handleClick={handleClick} teacher={item} />
              </div>
            );
          })
        : "loading"}
    </div>
  );
};

export default Comments;
