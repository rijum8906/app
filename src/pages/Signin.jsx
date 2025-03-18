import { Button, Checkbox, Label, TextInput, Card } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";
import { loadingStart, login } from "./../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

// Define validation schema using Yup
const validationSchema = Yup.object({
  usernameOrEmail: Yup.string()
    .required("Username or Email is required")
    .test("is-email-or-username", "Invalid email or username", (value) => {
      // Check if the input is an email or a username
      const isEmail = Yup.string().email().isValidSync(value);
      const isUsername = Yup.string().min(4).max(20).isValidSync(value);
      return isEmail || isUsername;
    }),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  remember: Yup.boolean(),
});

export default function Component() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
      remember: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(loadingStart());
      // Dispatch login action with form data
      await dispatch(login(values));
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text">Sign In</h2>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div>
            <div className="mb-2 block min-w-full">
              <Label htmlFor="usernameOrEmail" value="Username or Email" className="text-gray-700" />
            </div>
            <TextInput id="usernameOrEmail" type="text" placeholder="Enter your username or email" name="usernameOrEmail" value={formik.values.usernameOrEmail} onChange={formik.handleChange} onBlur={formik.handleBlur} addon="👤" />
            {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail && <p className="text-red-500 text-sm mt-1">{formik.errors.usernameOrEmail}</p>}
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" className="text-gray-700" />
            </div>
            <TextInput id="password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} addon="🔒" />
            {formik.touched.password && formik.errors.password && <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" name="remember" checked={formik.values.remember} onChange={formik.handleChange} />
            <Label htmlFor="remember" className="text-gray-700">
              Remember me
            </Label>
          </div>
          <div className="min-w-full flex justify-center">
            <Button gradientDuoTone="purpleToBlue" type="submit" size="xl" isProcessing={loading} processingSpinner={<AiOutlineLoading className="h-5 w-5 animate-spin" />}>
              Submit
            </Button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="font-semibold text-purple-600 hover:text-purple-700 hover:underline">
            Sign up
          </Link>
        </p>
      </Card>
    </div>
  );
}
