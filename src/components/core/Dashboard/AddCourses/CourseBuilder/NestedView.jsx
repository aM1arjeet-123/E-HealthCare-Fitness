import {
  
  setCourses,
} from "../../../../../slices/courseSlice";
import ConfirmationModal from "../../../../common/ConfirmationModal";
import SubSectionModal from "./SubSectionModal";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxDropdownMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { deleteSection , deleteSubSection } from "../../../../../services/operations/courseDeatils";

const NestedView = ({ handleChangeEditSectionName }) => {
  const { course } = useSelector((state) => state.course);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [confirmationModal, setConfirmationModal] = useState(null);
  const [addSubsection, setAddSubsection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);

  const handleDeleteSection = async (sectionId) => {
    const result = await deleteSection({sectionId , courseId:course._id}, token)
    if(result){
      dispatch(setCourses(result))
    }
    setConfirmationModal(null);
  };
  const handleDeleteSubSection = async (subSectionId, sectionId) => {
    const result = await deleteSubSection({subSectionId , sectionId} , token)
    if(result){
      const updateCourseContent  =course.courseContent.map((section)=>
      section._id === sectionId ?result : section)
      const updatedCourse = {...course , courseContent:updateCourseContent}
    dispatch(setCourses(updatedCourse))
    }
    setConfirmationModal(null);
    
  };

  return (
    <>
      <div
        className="rounded-lg bg-richblack-700 p-6 px-8"
        id="nestedViewContainer"
      >
        {course?.courseContent?.map((section) => {
          //section Dropdown
          return (
            <details key={section._id} open>
              {/* section dropdown content */}
              <summary className="flex cursor-pointer items-center justify-between border-b-2 border-b-richblack-600 py-2">
                <div className="flex items-center gap-x-3">
                  <RxDropdownMenu className="text-2xl text-richblack-50" />
                  <p className="font-semibold text-richblack-50">
                    {section.sectionName}
                  </p>
                </div>
                <div className=" flex items-center gap-x-3">
                  <button
                    onClick={() =>
                      handleChangeEditSectionName(
                        section._id,
                        section.sectionName
                      )
                    }
                  >
                    <MdEdit className="text-xl text-richblack-300"></MdEdit>
                  </button>
                  <button
                    onClick={() =>
                      setConfirmationModal({
                        text1: "Delete this section",
                        text2:
                          "All the lecture in this section will be deleted",
                        btn1Text: "Delete",
                        btn2Text: "Cancel",
                        btn1Handler: () => handleDeleteSection(section._id),
                        btn2Handler: () => setConfirmationModal(null),
                      })
                    }
                  >
                    <RiDeleteBin6Line className="text-xl text-richblack-300" />
                  </button>
                  <span className="font-medium text-richblack-300">\</span>
                  <AiFillCaretDown className="text-xl text-richblack-300" />
                </div>
              </summary>
              <div className="px-6 pb-4">
              
               
                {/* /* Render all subsection within a section */ }
              
                {section.subSection.map((data) => {
                  return (
                  <div
                 
                    key={data?._id}
                    onClick={() => setViewSubSection(data)}
                    className="flex  cursor-pointer items-center justify-between gap-x-3border-b-2 border-b-richblack-600 py-2"
                  >
                    <div className="flex items-center gap-x-3 py-2 ">
                      <RxDropdownMenu className="text-2xl text-richblack-50"></RxDropdownMenu>
                      <p className="font-semibold text-richblack-50">
                       { data.title}
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-x-3"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={() =>
                          setEditSubSection({ ...data, sectionId: section._id })
                        }
                      >
                        <MdEdit className="text-xl text-richblack-300"></MdEdit>
                      </button>
                      <button
                        onClick={() =>
                          setConfirmationModal({
                            text1: "Delete this sub-section",
                            text2: "This lecture will be deleted",
                            btn1Text: "Delete",
                            btn2Text: "Cancel",
                            btn1Handler: () =>
                              handleDeleteSubSection(data._id, section._id),
                            btn2Handler: () => setConfirmationModal(null),
                          })
                        }
                      >
                        <RiDeleteBin6Line className="text-xl text-richblack-300" />
                      </button>
                    </div>
                  </div>
                  )
                })}
                {/* Add New Lecture to Section */}
                <button
                  onClick={() => setAddSubsection(section._id)}
                  className="mt-3 flex items-center gap-x-1 text-yellow-50"
                >
                  <FaPlus className="text-lg" />
                  <p>Add Lecture</p>
                </button>
              </div>
            </details>
          );
        })}
        {/* Modal Display */}
        {addSubsection ? (
          <SubSectionModal
            modalData={addSubsection}
            setModalData={setAddSubsection}
            add={true}
          />
        ) : viewSubSection ? (
          <SubSectionModal
            modalData={viewSubSection}
            setModalData={setViewSubSection}
            view={true}
          />
        ) : editSubSection ? (
          <SubSectionModal
            modalData={editSubSection}
            setModalData={setEditSubSection}
            edit={true}
          />
        ) : (
          <></>
        )}

        {/* Confirmation Modal */}

        {confirmationModal ? (
          <ConfirmationModal modalData={confirmationModal} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default NestedView;
