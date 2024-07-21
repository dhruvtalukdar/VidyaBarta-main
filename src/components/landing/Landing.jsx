import { useState } from "react"
import { useNavigate } from "react-router-dom";


const Landing = ({ studentId, setStudentId }) => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };


  const Popup = ({ isVisible, onClose }) => {
    const navigate = useNavigate()
  
    const handleSubmit = () => {
      navigate('/exam-details/results')
    }
  
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
        <div className="bg-white p-4 rounded shadow-lg">
          <button className="mb-4" onClick={onClose}>Close</button>
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setStudentId(e.target.value)}  type="text" className="block border-2 rounded px-2 mb-2" placeholder="Enter Student Id" />
            <input type="text" className="block border-2 rounded px-2" placeholder="Enter Name" />
            <button className="flex mx-auto bg-blue-500 text-white p-2 mt-5">Search</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center gap-4 mx-auto">
        <p className="text-lg">Welcome to</p>
        <p className="text-2xl font-semibold">HOLY NAME HIGHER SECONDARY SCHOOL</p>
        <p className="text-gray-800">Unlocking the Potential of Every Student</p>
        <img src="" alt="logo" className="mt-5"/>
        <p className="mt-2 text-gray-800">Explore a world of learning</p>
      </div>
      <div className="flex flex-col text-center mt-6">
        <p className="text-2xl font-semibold">About Us</p>
        <p className="text-gray-800">We don't just teach subjects; we nurture leaders, thinkers, and doers. Your journey with us is a preparation for a future where you're not just a part of the workforce but a leader driving change. 🌍💼</p>
      </div>
      <div className="flex flex-col mt-6 text-center">
        <button className="mx-auto bg-blue-500 hover:bg-blue-800 text-white px-3 py-2 border rounded w-1/3" onClick={togglePopup}>
        Check your Results
      </button>
      </div>
      <Popup isVisible={isPopupVisible} onClose={togglePopup} />
    </div>
  )
}

export default Landing