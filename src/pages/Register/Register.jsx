import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";




const Register = () => {
  
  const navigate = useNavigate();
  const { createUser,userUpdateProfile} = useContext(AuthContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('username');
    const url = form.get('url');
    const email = form.get('email');
    const password = form.get('password');

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error('Password must have at least one capital letter');
      return;
    }
    else if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
      toast.error('Password must have at least one special character');
      return;
    }

    createUser(email, password)
    .then(res => {
      userUpdateProfile(name, url)
      .then(res => {
        toast.success('User created successfully');
        navigate('/login');
      })
      .catch(err => {
        toast.error(err.message);
      });
    })
    .catch(err => {
      toast.error(err.message);
    });

  };

  return (
    
    <div className="container mx-auto mt-8 p-4">
    <div><Toaster/></div>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-gray-700">
              Profile Picture:
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="w-full border rounded p-2 mt-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Photo URL:
            </label>
            <input
              type="text"
              id="url"
              name="url"
              className="w-full border rounded p-2 mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border rounded p-2 mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded p-2 mt-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border rounded p-2 mt-2 mb-4"
              required
            />

<button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
          >
            Register
          </button>
          <p className="font-medium text-lg">Already register? <span className="text-blue-500"><Link to='/login'>Sign in </Link></span></p>

          </div>
        </form>


        
      </div>

    </div>
  );
};

export default Register;
