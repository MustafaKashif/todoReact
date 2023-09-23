import React from "react";
import "../../App.css"
const UsersList = ({ user, uniqueSubtraction, yellowColor, grayColor, bisqueColor }) => {
  return (
    <div style={{ marginTop: "30px" }}>
      {user.map((x) => (
        <div
          key={x.id}
          style={{
            backgroundColor: x.bgcolor,
            marginBottom: "9px",
            padding: "13px",
            borderRadius: "15px",
          }}
        >
          {x.name}----------{x.age}---------{x.fatherName} 
          <button id="btn2"
            style={{ color: "red", cursor: "pointer", marginLeft: "20px"}}
            onClick={() => uniqueSubtraction(x.id)}
          >
            Remove
          </button>
          <span
            style={{ color: "gray", cursor: "pointer", marginLeft: "20px" }}
            onClick={() => grayColor(x.id)}
          >
            gray
          </span>
          <span
            style={{ color: "yellow", cursor: "pointer", marginLeft: "20px" }}
            onClick={() => yellowColor(x.id)}
          >
            Yellow
          </span>
          <span
            style={{ color: "bisque", cursor: "pointer", marginLeft: "20px" }}
            onClick={() => bisqueColor(x.id)}
          >
            Bisque
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersList;