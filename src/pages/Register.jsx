import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";
import { registrationStart, registrationSuccess, registrationFailure } from "./../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Full name is required").min(3, "Name must be at least 3 characters").max(50, "Name must not exceed 50 characters"),
  username: Yup.string()
    .required("Username is required")
    .min(4, "Username must be at least 4 characters")
    .max(20, "Username must not exceed 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  email: Yup.string().required("Email is required").email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  agreeToTerms: Yup.boolean().required("You must accept the terms and conditions").oneOf([true], "You must accept the terms and conditions"),
});

const Register = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await dispatch(registrationStart(values));
    },
  });

  return (
    <Card className="w-full p-8 space-y-6 bg-white rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text">Create Account</h2>
      <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div>
          <div className="mb-2 block min-w-full">
            <Label htmlFor="name" value="Full Name" className="text-gray-700" />
          </div>
          <TextInput id="name" type="text" placeholder="Enter your full name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} addon="👤" />
          {formik.touched.name && formik.errors.name && <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>}
        </div>

        {/* Username Field */}
        <div>
          <div className="mb-2 block min-w-full">
            <Label htmlFor="username" value="Username" className="text-gray-700" />
          </div>
          <TextInput id="username" type="text" placeholder="Enter your username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur} addon="👥" />
          {formik.touched.username && formik.errors.username && <p className="text-red-500 text-sm mt-1">{formik.errors.username}</p>}
        </div>

        {/* Email Field */}
        <div>
          <div className="mb-2 block min-w-full">
            <Label htmlFor="email" value="Email" className="text-gray-700" />
          </div>
          <TextInput id="email" type="email" placeholder="Enter your email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} addon="✉️" />
          {formik.touched.email && formik.errors.email && <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>}
        </div>

        {/* Password Field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" className="text-gray-700" />
          </div>
          <TextInput id="password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} addon="🔒" />
          {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>}
        </div>

        {/* Confirm Password Field */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmPassword" value="Confirm Password" className="text-gray-700" />
          </div>
          <TextInput id="confirmPassword" type="password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} addon="🔐" />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</p>}
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox id="agreeToTerms" name="agreeToTerms" checked={formik.values.agreeToTerms} onChange={formik.handleChange} />
          <Label htmlFor="agreeToTerms" className="text-gray-700">
            I agree to the terms and conditions
          </Label>
        </div>
        {formik.touched.agreeToTerms && formik.errors.agreeToTerms && <p className="text-red-500 text-sm">{formik.errors.agreeToTerms}</p>}

        {/* Submit Button */}
        <div className="min-w-full flex justify-center">
          <Button gradientDuoTone="purpleToBlue" type="submit" size="xl" isProcessing={loading} processingSpinner={<AiOutlineLoading className="h-5 w-5 animate-spin" />}>
            Register
          </Button>
        </div>
      </form>
      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-purple-600 hover:text-purple-700 hover:underline">
          Sign in
        </Link>
      </p>
    </Card>
  );
};

export default Register;
