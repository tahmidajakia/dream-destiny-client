import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        Swal.fire({
          icon: "success",
          title: "Logged in with Google",
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h1 className="text-center font-bold text-3xl mb-6">Please Login</h1>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input w-full h-[66px] input-bordered"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input w-full h-[66px] input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <button className="btn bg-primaryColor text-white w-full h-[66px]">
            Login
          </button>
        </div>
        <h1 className="mt-4 text-center">
          Do not have an account?{" "}
          <Link to="/register">
            <span className="text-green font-bold">Register</span>
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
          {/* Add your SocialLogin component here */}
      </form>
    </div>
  );
};

export default Login;
