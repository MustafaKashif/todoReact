// import React, { useEffect, useState } from 'react'
import "../App.css"
import MyForm from './Components/MyForm'
import UsersList from './Components/UsersList'


//! Main Object
let objMustafa  = {
    name : "",
    age : 0 ,
    fatherName : "",
}
const App = () => {

    //! It is for the main data updation in the object
    const [dataOfForm , setData] = useState(objMustafa)

  
  //! It is for the updation of values in the object Named (objMustafa)
  const updateValues = (e) => {
    setData({...dataOfForm, [e.target.name] : e.target.value})
  }

  //! Getting Data from Local Storage
  const dataGettingFromLocalStorage = () => {
   let dataGetting = localStorage.getItem("data")
  if (dataGetting) {
    return JSON.parse(dataGetting)
  }
  else {
    return []
  }
}

  //! It is for the addition of user object
  const [user, setUser] = useState([dataGettingFromLocalStorage])

  //! It is for the addition of user and id in the object to make it uniques than others
  const uniqueAddition = (values) => {
       let updatedUser  = {
        ...values,
        id: new Date(),
        bgColor : "",
       }
       setUser([...user, updatedUser])
  }

  //! Removing the user with respective to their id's
  const uniqueSubtraction = (id) => {
    setUser(user.filter((x) => x.id !== id))
  }

  const yellowColor = (id) => {
    let newUsers = user.map((user) => {
      return user.id === id ? { ...user, bgcolor: "Yellow", color : "black" } : user;
    });

    setUser(newUsers);
  };

  const grayColor = (id) => {
    let newUsers = user.map((user) => {
      return user.id === id ? { ...user, bgcolor: "gray", color : "white" } : user;
    });

    setUser(newUsers);
  };

  const bisqueColor = (id) => {
    let newUsers = user.map((user) => {
      return user.id === id ? { ...user, bgcolor: "bisque", color : "white" } : user;
    });

    setUser(newUsers);
  };
  //! Saving Data to the local Storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user))
  }, [user])

    //! Yaar mere bhai props ke name or iske name exactly same hone chahiye hain otherwise error deta rahega yeh
  
  return (
    <>
    <MyForm dataOfForm = {dataOfForm} updateValues= {updateValues} uniqueAddition = {uniqueAddition}/>
    {user.length > 0 ? (
        <UsersList
          user={user}
          uniqueSubtraction={uniqueSubtraction}
          yellowColor={yellowColor}
          grayColor = {grayColor}
          bisqueColor = {bisqueColor}
        />
      ) : (
        <span
        style = {{ margin:"150px", padding:"25px", backgroundColor:"red", borderRadius:"10px"}}
        >
            "OOPS ! No users at the moment"
        </span>
      )}

    </>
  )
}

export default App


//! Form App ka code hai

// import React from "react";

// const App = () => {
//   // onChange - input - event, properties
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [saveInfo, setSaveInfo] = React.useState(false);

//   const changeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const changePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();

//     // if(!email || !password)
//     // if(email === "" || password === "")
//     if (!email || !password) {
//       alert("Fields are required");
//     } else {
//       if (saveInfo) {
//         localStorage.setItem("info", JSON.stringify({ email, password }));
//       }
//       console.log({ email, password });
//       setEmail("");
//       setPassword("");
//       setShowPassword(false);
//     }
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <h1 style={{textAlign:"center", textDecoration: "underline",}}>Simple Form</h1>
//       {/* {JSON.stringify(showPassword)} */}
//       <input
//       id="input"
//         placeholder="Enter your name : "
//         type="email"
//         value={email}
//         name="email"
//         onChange={changeEmail}
//         required
//       />
//       <input
//       id="input"
//         placeholder="Enter your Password : "
//         type={`${showPassword ? "text" : "password"}`}
//         value={password}
//         name="password"
//         onChange={changePassword}
//         required
//       />
//       <br />
//       <br/>
//       <span id="Span">show password</span>
//       <input
//       style={{fontSize :"40px"}}
//         type="checkbox"
//         value={showPassword}
//         onChange={() => setShowPassword(!showPassword)}
//       />
//       <br />
//       <br/>
// <span id="Span">saveInfo</span>
//       <input
//         type="checkbox"
//         value={saveInfo}
//         onChange={() => setSaveInfo(!saveInfo)}
//       />
//       <br />
//       <br />
//       <input id="btn2" type="submit" value={"login"} />
//     </form>
//   );
// };

// export default App;