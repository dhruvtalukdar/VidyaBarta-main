import { useEffect, useState } from "react";
import axios from "axios";
import html2pdf from "html2pdf.js";

function StudentDetails({ studentId, setStudentId }) {
  const [loading, setLoading] = useState(false);
  const [studentDetails, setStudentDetails] = useState(null);
  const [error, setError] = useState(null);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://script.googleusercontent.com/macros/echo?user_content_key=iW_q4GaFf-lWdEK2kw6Iw65ny-tMG14Fuqelu0OoslXKbnviq4EQekFvpLZIR5DvDkV7_5h18jfqy0_x7orAVL1eRsurZoTlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnITC2tXMWJULi4ih2AaCn5qYyh3fc1F3pATocEG-tW0dXrigxObLc924wTHbqfk1Dow8NoNqt2G-DR6GIAgnBJ0xBnWUEMeDNQ&lib=MTjz2KoLtIiMLh3NAW9o_G3Mvq-Peybp_`
        );
        console.log(res.data.data);
        setStudentList(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching student list. Please try again.");
      }
    };

    fetchData();
}, []);

  console.log("studentId", studentId);

  useEffect(() => {
    fetchStudentDetail();
  }, [studentList]);

  const fetchStudentDetail = () => {
    setStudentDetails(null);
    setError(null);

    const foundStudent = studentList.find(
      (student) => student.StudentID === Number(studentId)
    );

    if (foundStudent) {
      console.log("foundStudent", foundStudent);
      setLoading(false);
      setStudentDetails(foundStudent);
    } else {
      setError("Student not found. Please enter a valid Student ID.");
    }
  };

  // const handleDownloadPDF = () => {
  //   const element = document.getElementById("student-details-container");
  //   const options = {
  //     margin: 10,
  //     filename: "student-details.pdf",
  //     image: { type: "jpeg", quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  //   };
  //   html2pdf().from(element).set(options).save();
  // };

  console.log("current", studentDetails);
  return (
    <div className="text-center shadow-lg border rounded p-4 m-4">
      <p className="text-2xl font-semibold">Student Results</p>

      {error && <p className="text-red-500 mt-[10px] ">{error}</p>}

      {!error && studentDetails && (
      <div className="border-2 rounded shadow-md p-4 mt-2">
        <div className="flex flex-col">
          <p>HOLY NAME HIGHER SECONDARY SCHOOL</p>
          <p>Final Examination</p>
          <p>Student ID : {studentDetails.StudentID}</p>
          <p>Roll Number : </p>
          <p>Name : </p>
        </div>
      </div>
      )}

    </div>
  )
    
}

export default StudentDetails;