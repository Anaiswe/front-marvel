// import { useState } from "react";
// import axios from "axios";
import under_construction from "../Assets/under-construction.jpg";
const Signup = () => {
  return (
    <>
      <div className="under-construction">
        Sorry, this page is waiting for bugs to be fixed
      </div>
      <img
        className="img-construction"
        src={under_construction}
        alt="img-construction"
      ></img>
    </>
  );
};
export default Signup;
// TO FIX
// const Signup = ({ setUser, apiUrl }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState();

//   const handleSubmit = async (event) => {
//     try {
//       event.preventDefault();
//       const response = await axios.post(`${apiUrl}/user/signup`, {
//         email: email,
//         password: password,
//       });
//       setUser(response.data);
//       setErrorMessage(false);
//     } catch (error) {
//       setErrorMessage(true);
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className="form">
//       <div className="form wrapper">
//         <span>Signup</span>
//         <form onSubmit={handleSubmit}>
//           <div className="input-form">
//             <input type="email" placeholder="Email" onChange={setEmail} />
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={setPassword}
//             />
//           </div>
//           <div>
//             <input type="submit" value="SIGNUP" className="button" />
//             <span>{errorMessage}</span>
//             <Link to="/signup">
//               Do you already have an account ? Signup here !
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Signup;
