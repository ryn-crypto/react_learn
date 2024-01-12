import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <FormRegister />
      <p className="text-sm mt-5 text-center">
        have an account?{" "}
        <Link className="font-bold text-blue-600" to="/login">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default RegisterPage;
