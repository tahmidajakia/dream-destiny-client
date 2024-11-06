import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const {googleSignIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            icon: "success",
            title: "Registered Successfully",
            text: "Welcome to our platform!",
            confirmButtonText: "OK",
          });
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };



  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result)
        Swal.fire({
          icon: "success",
          title: "SignIn in with Google",
          text: "Welcome back!",
          confirmButtonText: "OK",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Sign-In error:", error);
      });
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow-md w-full max-w-md mt-16 mb-16 px-8 py-8"
      >
        <h1 className="text-center font-bold text-3xl mb-6">Please Register</h1>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="input input-bordered"
            required
          />
          {errors.name && <span>This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            type="text"
            {...register("photoURL")}
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
          {errors.photoURL && <span>This field is required</span>}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            placeholder="Password"
            className="input input-bordered"
            required
          />
          {errors.password && (
            <span>Password must be between 6 and 20 characters</span>
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>

        <div className="form-control mb-4">
          <button className="btn bg-primaryColor text-white w-full h-[66px]">
            Register
          </button>
        </div>

        <h1 className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-green font-bold">Please Login</span>
          </Link>
        </h1>

        <div className="items-center text-center mt-3">
          <h2>Or sign in with</h2>

          <div className="divider w-full"></div>
          <div>
            <button onClick={handleGoogleSignIn} className="btn">
              <FaGoogle></FaGoogle>
              GOOGLE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
