import './App.css';
import Navbar from './components/common/Navbar';
import { Routes ,Route} from 'react-router-dom';
import OpenRoute from "./components/core/Auth/OpenRoute"
import Login from "./pages/Login"
import {  useSelector } from "react-redux"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"
import Home from "./pages/Home"
import MyProfile from "./components/core/Dashboard/MyProfile"
import PrivateRoute from './components/core/Auth/PrivateRoute';
import Dashboard from "./pages/Dashboard"
import Settings from "./components/core/Dashboard/Settings"
import DoctorAppointment from './components/core/Dashboard/DoctorAppointment';
import MyAppointment from './components/core/Dashboard/MyAppointment';
import { ACCOUNT_TYPE } from "./utils/constants"
import Instructor from "./components/core/Dashboard/Instructor"
import AddCourse from './components/core/Dashboard/AddCourses/index';
import MyCourses from "./components/core/Dashboard/MyCourses"
import Cart from "./components/core/Dashboard/CartForPatient/Cart"
import About from './pages/About';
import Contact from "./pages/Contact"
import BlogPage from "./pages/BlogPages"
import BlogDetails from './components/core/BlogRelated/BlogDetails';
import CreateBlog from './pages/CreateBlog';
import MyBlogs from "./components/core/BlogRelated/MyBlogs"
import SetAvaliability from './components/core/Dashboard/Doctor/SetAvaliability';
import DoctorAppointmentPage from './components/core/Dashboard/Doctor/DoctorAppointmnetPage';
import MyAppointmentList from "./components/core/Dashboard/Doctor/MyAppointmentList"
import Catalog from "./pages/Catalog"
import CourseDetails from "./pages/CourseDetails"
import StudentEnrolledCourses from "./components/core/Dashboard/StudentEnrolledCourses"
import VideoDetails from "./components/core/ViewCourse/VideoDetails"
import ViewCourse from "./pages/ViewCourse"


function App() {
  const { user } = useSelector((state) => state.profile)
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/blogs" element={<BlogPage/>}/>
      <Route path="/catalog/:catalogName" element={<Catalog/>}/>
      <Route path="/courses/:courseId" element={<CourseDetails/>}/>
      <Route path="/blogs/:id" element={<BlogDetails/>}/>
      {(user?.accountType === "Doctor" || user?.accountType === "Instructor") && 
      <Route path='/createBlog' element={<CreateBlog/>}/>}
       {(user?.accountType === "Doctor" || user?.accountType === "Instructor") && 
      <Route path='/my-blogs' element={<MyBlogs/>}/>}

        {/* routes for login and signup */}
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
          <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
          <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        {/* Private routes for logged user */}
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >




        {/* Routes for all user */}
        <Route path="/dashboard/appointment" element={<DoctorAppointment />} />
        <Route path="/dashboard/my-appointment" element={<MyAppointment />} />

        <Route path="dashboard/my-profile" element={<MyProfile />} />
        <Route path="dashboard/Settings" element={<Settings />} />
        {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
            
            <Route path="dashboard/instructor" element={<Instructor/>}/>
            <Route path="dashboard/add-courses" element={<AddCourse/>}/>
            <Route path="dashboard/my-courses" element={<MyCourses/>}/>
            {/* <Route path="/dashboard/edit-courses/:courseId" element={<EditCourse/>}/> */}
            
            </>
          )}
           {user?.accountType === ACCOUNT_TYPE.PATIENT && (
            <>
            <Route path="/dashboard/enrolled-courses" element={<StudentEnrolledCourses/>}/>
            <Route path="/book-appointment/:doctorId" element={<DoctorAppointmentPage />} />
            <Route path="/dashboard/cart" element={<Cart/>}/>


            </>
          )}
             {user?.accountType === ACCOUNT_TYPE.DOCTOR && (
            <>
            {/* <Route path="/dashboard/enrolled-courses" element={<StudentEnrolledCourses/>}/> */}
            <Route path="/dashboard/availability" element={<SetAvaliability/>}/>
            <Route path="/dashboard/doctorAppointment" element={<MyAppointmentList/>}/>


            </>
          )}

        </Route>
        
        <Route element={
          <PrivateRoute>
            <ViewCourse/>
          </PrivateRoute>
        }>
          {user?.accountType === ACCOUNT_TYPE.PATIENT && (
            <>
            <Route path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails/>}
            />
            
            </>
          )}
          </Route>






      </Routes>
     
    </div>
  );
}

export default App;
