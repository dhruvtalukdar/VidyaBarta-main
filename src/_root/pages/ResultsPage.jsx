import StudentDetails from "../../components/studentDetails/StudentDetails";


function ResultsPage({ studentId, setStudentId }) {
  return (
    <div>
      <StudentDetails studentId={studentId} setStudentId={setStudentId} />
    </div>
  );
}

export default ResultsPage;