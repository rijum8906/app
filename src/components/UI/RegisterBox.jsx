import { loginStart, loginSuccess, loginFailure } from "./../../features/auth/authSlice";
import axios from "./../../api/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./../../validators/authValidator";

const RegisterBox = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      remember: false,
    },
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data) => {
    const { firstName, lastName, email, username, password } = data;

    try {
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.toLowerCase(),
        username: username.toLowerCase(),
        password,
      };

      const res = await axios.post("/auth/register", payload);
      toast.success("Registration successful!");
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegister)}>
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Register</h2>

        {/* First Name */}
        <div>
          <Label htmlFor="firstName" value="First Name" className="mb-2 block" />
          <TextInput id="firstName" type="text" placeholder="John" {...register("firstName")} />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>

        {/* Last Name */}
        <div>
          <Label htmlFor="lastName" value="Last Name" className="mb-2 block" />
          <TextInput id="lastName" type="text" placeholder="Doe" {...register("lastName")} />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email" value="Email" className="mb-2 block" />
          <TextInput id="email" type="email" placeholder="you@example.com" {...register("email")} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        {/* Username */}
        <div>
          <Label htmlFor="username" value="Username" className="mb-2 block" />
          <TextInput id="username" type="text" placeholder="yourusername" {...register("username")} />
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
        </div>

        {/* Password */}
        <div>
          <Label htmlFor="password" value="Password" className="mb-2 block" />
          <TextInput id="password" type="password" placeholder="********" {...register("password")} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <Label htmlFor="confirmPassword" value="Confirm Password" className="mb-2 block" />
          <TextInput id="confirmPassword" type="password" placeholder="********" {...register("confirmPassword")} />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
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
          <Button gradientDuoTone="purpleToBlue" type="submit" size="xl" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <AiOutlineLoading className="h-5 w-5 animate-spin mr-2" />
                Registering...
              </>
            ) : (
              "Register"
            )}
          </Button>
        </div>
      </form>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-700 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterBox;
