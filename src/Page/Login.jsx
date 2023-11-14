import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";
import swal from "sweetalert";

const Login = () => {

  const {loginUser} = useContext(AuthContex)

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log( email, password);

    loginUser( email , password) 
    .then( res =>{
      console.log(res.user);
      e.target.reset
      swal("Good job!", "Your Login Successfull", "success");
    })
    .catch( error => console.error(error))
  };

  return (
    <div className=" md:w-[700px] mx-auto min-h-screen">
      <div className="hero-content">
        <div className=" flex-shrink-0 w-full   ">
          <form onSubmit={handleLogin} className="card-body ">
            <h1 className=" font-bold text-4xl text-black underline mb-2">
              Please Login Now
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-xl font-medium">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
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
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-black text-xl font-medium">
              You are New Here? Please{" "}
              <NavLink to="/register" className=" text-blue-600">
                Regitetion
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
