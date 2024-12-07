const BASE_URL = "http://localhost:3030/api/v1"

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "/auth/sendotp",
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
//   RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
//   RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
}


// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
  UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}

export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "/profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "/profile/instructorDashboard",
}

//  courses url

export const courseeEndpoints  ={
  EDIT_COURSE_API:BASE_URL + "/course/editCourse",
  CREATE_COURSE_API:BASE_URL + "/course/createCourse",
  COURSE_CATEGORIES_API:BASE_URL + "/course/showAllCategories",
  CREATE_SECTION_API:BASE_URL + "/course/addSection",
  UPDATE_SECTION_API:BASE_URL +"/course/updateSection",
  CREATE_SUBSECTION_API:BASE_URL + "/course/addSubSection",
  DELETE_SUBSECTION_API:BASE_URL + "/course/deleteSubSection",
  UPDATE_SUBSECTION_API:BASE_URL + "/course/updateSubSection",
  DELETE_SECTION_API:BASE_URL + "/course/deleteSection",
  GET_ALL_INSTRUCTOR_COURSES:BASE_URL +"/course/getInstructorCourses",
  DELETE_COURSE_API:BASE_URL + "/course/deleteCourse",
  GET_FULL_COURSE_DETAILS_API:BASE_URL + "/course/getFullCourseDetails",
  GET_COURSE_DETAILS:BASE_URL +"/course/getCourseDetails",
  GET_FULL_COURSE_DETAILS_API:BASE_URL + "/course/getFullCourseDetails",
  CREATE_RATING_API:BASE_URL + "/course/createRating"

}

export const Categories = {
  CATEGORIES_API:BASE_URL + "/course/showAllCategories"
}

export const BlogsDetails  = {
  GET_ALL_BLOGS:BASE_URL+"/blogs",
  CREATE_BLOG:BASE_URL+"/blogs/create",
  LIKE_DISLIKE:BASE_URL+"/blogs/like-dislike",
  COMMENT_ON_BLOG:BASE_URL+"/blogs/comment",
  GET_MY_BLOG:BASE_URL+"/blogs/my-blogs"

}

export const DoctorRelated  = {
  GET_DOCTOR_BY_SPECIAL:BASE_URL+"/doctors",
  SET_AVALIABILITY:BASE_URL+"/doctors/availability",
  AVAILABLE_SLOT:BASE_URL+"/doctors//available-slots",
  APPOINTMENT_SLOT:BASE_URL+"/doctors/book-appointment",
  ALL_APPOINTMENT_BY_PATIENT:BASE_URL+"/doctors/appointments",
  ALL_APPOINTMENT_BY_DOCTOR:BASE_URL+"/doctors/appointments-by-date",
  STATUS_APL:BASE_URL+"/doctors/update-status",
}

export const catalogData = {
  CATALOG_PAGE_DATA_API: BASE_URL + "/course/getCategoryPageDetails"
}

export const studentEndpoints = {
  COURSE_PAYMENT_API:BASE_URL + "/payment/capturePayment",
  COURSE_VERIFY_API:BASE_URL +"/payment/verifyPayment",
  SEND_PAYMENT_SUCCESSFUL_EMAIL_API:BASE_URL + "/payment/sendPaymentSuccessEmail"
}

export const ratingsEndpoints = {
  REVIEW_DETAILS_API: BASE_URL +"/course/getReviews"
}

export const contactEndpoints = {
  CONTACT_API: BASE_URL +"/reach/contact"
}