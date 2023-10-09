import { useContext} from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  

    const { loginUser, googleLoginUser } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();


  const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);


        loginUser(email, password)
        .then(() => {
            toast.success("User logged in successfully");
            navigate(location?.state ? location?.state : "/");
        })
        .catch(error => {
            console.error(error);
            toast.error(error.message);
        })

      }

      const handleGoogleLogin = () => {
        googleLoginUser()
          .then(() => {
            toast.success("User logged in successfully");
            navigate(location?.state ? location.state : "/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
      };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-white">

        <form className="card-body p-6" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label mt-1">
              <a href="#" className="link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>

        <div className="flex space-x-2 justify-center items-center bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">
                <FcGoogle />
                <button onClick={handleGoogleLogin}>
                  Or sign-in with Google
                </button>
              </div>
              <p className="mt-8">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="cursor-pointer text-sm text-blue-600 hover:underline hover:text-red-600"
                >
                  Register Here
                </Link>
              </p>
      </div>
    </div>
  );
};

export default Login;
