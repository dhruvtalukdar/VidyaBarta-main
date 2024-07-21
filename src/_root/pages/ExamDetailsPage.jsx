import Landing from "../../components/landing/Landing";


function ExamDetailsPage({ studentId, setStudentId }) {
  return (
    <div>
      <Landing studentId={studentId} setStudentId={setStudentId} />
    </div>
  );
}

export default ExamDetailsPage;
 