import { loginStart, loginSuccess, loginFailure } from "./../../features/auth/authSlice";
import axios from "./../../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./../../validators/authValidator";

const LoginBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.auth.loading);
  
  const sendLoginDataToServer = async (url, payload)=>{
    try {
      dispatch(loginStart());

      const res = await axios.post(url, payload);

      dispatch(loginSuccess({
        token: res.data.data.token,
        ...res.data.data.user
      }));
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
      toast.error(err.response?.data?.message || "Login failed. Please try again.");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      emailOrUsername: "",
      password: "",
      remember: false,
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    const { emailOrUsername, password } = data;

    const isEmail = emailOrUsername.includes("@");
    const payload = {
      password,
      ...(isEmail ? { email: emailOrUsername.toLowerCase() } : { username: emailOrUsername.toLowerCase() }),
    };
    await sendLoginDataToServer("/auth/login",payload);
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Log In</h2>

        {/* Username or Email */}
        <div>
          <Label htmlFor="emailOrUsername" value="Username or Email" className="text-gray-700 mb-2 block" />
          <TextInput id="emailOrUsername" type="text" placeholder="Enter your Username or Email" addon="👤" {...register("emailOrUsername")} />
          {errors.emailOrUsername && <p className="text-red-500 text-sm mt-1">{errors.emailOrUsername.message}</p>}
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password" value="Your password" className="text-gray-700 mb-2 block" />
          <TextInput id="password" type="password" addon="🔒" {...register("password")} />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        {/* Remember Me */}
        <div className="flex items-center gap-2">
          <Checkbox id="remember" {...register("remember")} />
          <Label htmlFor="remember" className="text-gray-700">
            Remember me
          </Label>
        </div>

        {/* Submit */}
        <div className="min-w-full flex justify-center">
          <Button gradientDuoTone="purpleToBlue" type="submit" size="xl" disabled={isSubmitting || loading}>
            {isSubmitting || loading ? (
              <>
                <AiOutlineLoading className="h-5 w-5 animate-spin mr-2" />
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </Button>
        </div>
      </form>
      <div className="flex justify-center">
        <GoogleLogin onSuccess={async (data)=>{
          await sendLoginDataToServer("/auth/continue-with-google",{token:data.credential})
        }} />
      </div>
      <p className="text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-purple-600 hover:text-purple-700 hover:underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginBox;
