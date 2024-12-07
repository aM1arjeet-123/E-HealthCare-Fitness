import { ACCOUNT_TYPE } from "../utils/constants"

export const sidebarLinks = [
  {
    id: 1,
    name: "Doctor Appointment",
    path: "/dashboard/appointment",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscHeartFilled",
  },
  {
    id: 2,
    name: "My Appointment",
    path: "/dashboard/my-appointment",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscDiffAdded",
  },
  {
    id: 3,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 4,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 5,
    name: "My Courses",
    path: "/dashboard/my-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 6,
    name: "Add Course",
    path: "/dashboard/add-courses",
    type: ACCOUNT_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 7,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscMortarBoard",
  },
  {
    id: 8,
    name: "Cart",
    path: "/dashboard/cart",
    type: ACCOUNT_TYPE.PATIENT,
    icon: "VscArchive",
  },
  {
    id: 9,
    name: "Set Availability",
    path: "/dashboard/availability",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscCalendar",
  },
  {
    id: 10,
    name: "My Appointment",
    path: "/dashboard/doctorAppointment",
    type: ACCOUNT_TYPE.DOCTOR,
    icon: "VscBook",
  },
]
