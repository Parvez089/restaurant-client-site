/** @format */
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          console.log("user profile info updated");
          reset();
          Swal.fire({
            icon: "success",
            title: "User Created successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title> Bistro | Signup </title>
      </Helmet>
      <div className='hero min-h-screen bg-base-200 bg-img'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Signup</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card flex-shrink-0 w-full pb-5 max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body '>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  placeholder='name'
                  name='naem'
                  className='input input-bordered'
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className='text-red-600'>Name is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  type='text'
                  placeholder='Photo URL'
                  name='PhotoURL'
                  className='input input-bordered'
                  {...register("PhotoURL", { required: true })}
                />
                {errors.PhotoURL && (
                  <span className='text-red-600'>PhotoURL is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  className='input input-bordered'
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className='text-red-600'>Email is required</span>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='input input-bordered'
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className='text-red-600'>Password is required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className='text-red-600'>
                    At least one upper case, one lower case English letter , one
                    digit and one special character
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className='text-red-600'>Min length is 6</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className='text-red-600'>Min length is 20</p>
                )}
                <label className='label'>
                  <a href='#' className='label-text-alt link link-hover'>
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className='form-control mt-6'>
                <input
                  className='btn btn-primary'
                  type='submit'
                  value='signup'
                />
              </div>
            </form>
            <p className=' text-xl text-center'>
              Already Have an Account?{" "}
              <Link className=' font-bold text-blue-500' to='/login'>
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
