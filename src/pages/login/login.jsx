// import axios from "axios";
// import { useContext, useState,useNavigate } from "react";
// import { useNavigate } from "react-router-dom";

// import "./login.css";

// const Login = () => {
//     const handleRegisterLogin = (e) => {
//         e.preventDefault()
//         axios.post("http://localhost:7000/user/login", {
//             "email": email,
//             "password": password,
//         }).then((response) =>{
//             if(response.data.error){
//                 alert("Incorrect password or username")
//             }
//             else{
//                 alert("successfully login")
//                 localStorage.setItem("User", JSON.stringify(response.data))
//                 navigate("/")
//             }
            
//         }).catch((error) => console.log(error))
//     }


//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input
//           type="text"
//           placeholder="username"
//           id="username"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <input
//           type="password"
//           placeholder="password"
//           id="password"
//           onChange={handleChange}
//           className="lInput"
//         />
//         <button disabled={loading} onClick={handleRegisterLogin} className="lButton">
//           Login
//         </button>
//         {error && <span>{error.message}</span>}
//       </div>
//     </div>
//   );
// };

// export default Login;