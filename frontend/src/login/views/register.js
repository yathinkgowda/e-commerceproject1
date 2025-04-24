// // import React from "react";
// // import { useNavigate } from 'react-router-dom'

// // const Register = () => {
// //   const navigate = useNavigate();

// //   const handleSubmit = async(e) => {
// //     e.preventDefault();
// //     const form = e.target;
// //     const data = {
// //       firstName: form.firstName.value,
// //       lastName: form.lastName.value,
// //       email: form.email.value,
// //       contactNumber: form.contactNumber.value,
// //       password: form.password.value,
// //       confirmPassword: form.confirmPassword.value,
// //     };
// //     const res = await fetch('http://localhost:3000/auth/register', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(data),
// //     });
    

// //     const data1 = await res.json();    console.log("Registration Data:", data1);
// //     if(data1?.success){
// //       alert(data1.message)
// //       navigate('/loginpage');

// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <h2>Register</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div className="input-group">
// //           <label htmlFor="firstName">First Name</label>
// //           <input
// //             type="text"
// //             id="firstName"
// //             name="firstName"
// //             placeholder="Enter your first name"
// //             required
// //           />
// //         </div>
// //         <div className="input-group">
// //           <label htmlFor="lastName">Last Name</label>
// //           <input
// //             type="text"
// //             id="lastName"
// //             name="lastName"
// //             placeholder="Enter your last name"
// //             required
// //           />
// //         </div>
// //         <div className="input-group">
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             placeholder="Enter your email"
// //             required
// //           />
// //         </div>
// //         <div className="input-group">
// //           <label htmlFor="contactNumber">Contact Number</label>
// //           <input
// //             type="tel"
// //             id="contactNumber"
// //             name="contactNumber"
// //             placeholder="Enter your contact number"
// //             required
// //           />
// //         </div>
// //         <div className="input-group">
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             required
// //           />
// //         </div>
// //         <div className="input-group">
// //           <label htmlFor="confirmPassword">Confirm Password</label>
// //           <input
// //             type="password"
// //             id="confirmPassword"
// //             name="confirmPassword"
// //             placeholder="Confirm your password"
// //             required
// //           />
// //         </div>
// //         <input type="submit" value="Register" />
// //       </form>
// //       <div className="links">
// //         Already have an account?{" "}
// //         <a href="/loginpage">Login here</a>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// import React from "react";
// import { useNavigate } from 'react-router-dom';
// import './styles.css'; 
// const Register = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const data = {
//       firstName: form.firstName.value,
//       lastName: form.lastName.value,
//       email: form.email.value,
//       contactNumber: form.contactNumber.value,
//       password: form.password.value,
//       confirmPassword: form.confirmPassword.value,
//     };

//     const res = await fetch('http://localhost:3000/auth/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     const data1 = await res.json();
//     console.log("Registration Data:", data1);

//     if (data1?.success) {
//       alert(data1.message);
//       navigate('/loginpage');
//     }
//   };

//   // Inline styles object
//   const styles = {
//     container: {
//       backgroundColor: 'white',
//       padding: '30px',
//       borderRadius: '8px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       width: '100%',
//       maxWidth: '450px',
//       margin: 'auto',
//       fontFamily: 'Arial, sans-serif',
//     },
//     header: {
//       textAlign: 'center',
//       marginBottom: '20px',
//       fontSize: '24px',
//       color: '#333',
//     },
//     form: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     inputGroup: {
//       marginBottom: '20px',
//     },
//     label: {
//       fontSize: '14px',
//       color: '#333',
//       marginBottom: '8px',
//       display: 'block',
//     },
//     input: {
//       width: '100%',
//       padding: '12px',
//       fontSize: '14px',
//       border: '1px solid #ddd',
//       borderRadius: '4px',
//       outline: 'none',
//       boxSizing: 'border-box',
//     },
//     inputFocus: {
//       borderColor: '#4CAF50',
//     },
//     submitButton: {
//       backgroundColor: '#4CAF50',
//       color: 'white',
//       padding: '12px',
//       border: 'none',
//       borderRadius: '4px',
//       fontSize: '16px',
//       cursor: 'pointer',
//       transition: 'background-color 0.3s ease',
//       marginTop: '10px',
//     },
//     submitButtonHover: {
//       backgroundColor: '#45a049',
//     },
//     links: {
//       textAlign: 'center',
//       marginTop: '15px',
//     },
//     link: {
//       color: '#4CAF50',
//       textDecoration: 'none',
//     },
//     linkHover: {
//       textDecoration: 'underline',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>Register</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.inputGroup}>
//           <label htmlFor="firstName" style={styles.label}>First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             placeholder="Enter your first name"
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="lastName" style={styles.label}>Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             placeholder="Enter your last name"
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="email" style={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="contactNumber" style={styles.label}>Contact Number</label>
//           <input
//             type="tel"
//             id="contactNumber"
//             name="contactNumber"
//             placeholder="Enter your contact number"
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="password" style={styles.label}>Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Enter your password"
//             required
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="confirmPassword" style={styles.label}>Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             required
//             style={styles.input}
//           />
//         </div>
//         <input type="submit" value="Register" style={styles.submitButton} />
//       </form>
//       <div style={styles.links}>
//         Already have an account?{" "}
//         <a href="/loginpage" style={styles.link}>Login here</a>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';  

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      contactNumber: form.contactNumber.value,
      password: form.password.value,
      confirmPassword: form.confirmPassword.value,
    };

    const res = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const data1 = await res.json();
    console.log("Registration Data:", data1);

    if (data1?.success) {
      alert(data1.message);
      navigate('/loginpage');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            placeholder="Enter your contact number"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            required
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <div className="links">
        Already have an account?{" "}
        <a href="/loginpage">Login here</a>
      </div>
    </div>
  );
};

export default Register;
