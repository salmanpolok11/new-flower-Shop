import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import swal from "sweetalert";
import auth from "../Firebase/firebase.init";
import { sendEmailVerification, updateProfile } from "firebase/auth";
const Register = () => {

  const {createUser , googleLogin} = useContext(AuthContex)

  const handleRegister = e => {
     e.preventDefault();
     const name = e.target.name.value;
     const photoURL  = e.target.image.value;
     const email =  e.target.email.value;
     const password = e.target.password.value;
     console.log(name , email , password);

     createUser( email , password)
     .then( res =>{
       console.log(res.user);
       e.target.reset;

       updateProfile(res.user, {
        displayName: name,
        photoURL : photoURL
        
       })

       sendEmailVerification(res.user)
      .then( () =>  {
        swal("Good job!", "Your Create Accaount Successfull , Please Veryfied Your Email Address", "success");
      })
     })
     .catch( error => console.error(error))
  }

  const handleGoogleLog = ( ) =>{
          googleLogin(auth)
          .then( res => {
            console.log(res.user);
            swal("Good job!", "Your Create Accaount Successfull", "success");
          })
          .catch( error => console.error(error))
  }


  return (
    <div className=" md:w-[700px] mx-auto min-h-screen">
      <div className="hero-content">
        <div className=" flex-shrink-0 w-full   ">
          <form onSubmit={handleRegister} className="card-body ">
            <h1 className=" font-bold text-4xl text-black underline mb-2">
              Please Register Now
            </h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-medium">
                  Name
                </span>
              </label>
              <input
                type="text"
                 name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-medium">
                  PhotoURL
                </span>
              </label>
              <input
                type="url"
                 name="image"
                placeholder="Photo Link"
                className="input input-bordered"
              />
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-medium">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                 name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-black text-xl font-medium"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
            <p className="text-black text-xl font-medium">
              {" "}
              Already Have a Account? Please{" "}
              <Link to="/login" className=" mx-2 text-blue-600">
                Login
              </Link>
                      <span>Or</span>
              <Link  onClick={handleGoogleLog} className=" mx-2 text-blue-600">
                Google
              </Link>

                    

            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
