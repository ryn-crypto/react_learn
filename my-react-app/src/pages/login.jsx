import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layout/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
