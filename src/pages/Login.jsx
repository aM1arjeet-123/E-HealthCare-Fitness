import loginImg from "../assets/images/system-accessed-by-doctors-fingerprint-260nw-2291512001.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
    title="Welcome Back to Your Health Hub"
    description1="Enhance your wellness journey with knowledge and support."
    description2="Health and fitness resources to empower a healthier lifestyle."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login
