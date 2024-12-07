import signupImg from "../assets/images/360_F_861846846_ph8sZnFkobKcdLVuMnxUMCMs2tmbKtzW.jpg"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
    title="Join the Community for a Healthier Tomorrow"
    description1="Empower yourself with health insights and fitness knowledge."
    description2="Your journey to wellness starts here."
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup
