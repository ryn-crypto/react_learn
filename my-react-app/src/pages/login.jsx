import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">
        don't have an account?{" "}
        <Link className="font-bold text-blue-600" to="/register">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
