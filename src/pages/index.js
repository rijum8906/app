import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const Error404 = lazy(() => import("./Error404"));

export { Home, Login, Register, Error404 };
