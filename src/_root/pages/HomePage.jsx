const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
]


const HomePage = () => {
    const inputname = "p-2 border border-gray-300 bg-slate-100";


    return (
        <div className="bg-slate-200 w-full min-h-screen overflow-y-auto text-black p-8 m-4">
            <div className="bg-white p-5 shadow-md">
                <div>
                    <p className="text-sm text-gray-500">Student Profile</p>
                    <p className="text-xl font-semibold">STUDENT NAME</p>
                    <p className="font-medium">Roll No: 20/250 | Student ID: AEC204583902</p>
                    <button className="text-blue-500 border-2 border-solid px-3 py-2">PRINT</button>
                </div>
                <div className="flex justify-between mt-8">
                    <img 
                        src=""
                        alt="school-logo"
                    />
                    <p>Loading...</p>
                </div>
                <div className="mt-8">
                    <p className="text-xl font-medium">Academic Details</p>
                </div>
                <div className="mt-8">
                    <p className="text-xl font-medium">Basic Details</p>
                    <div className="m-6">
                        <table className="min-w-full border-collapse border border-gray-300">
                            <tbody>
                                <tr className="border-b">
                                    <td className={inputname}>Student ID</td>
                                    <td className="p-2 border border-gray-300" colSpan="3">
                                        <div className="flex items-center">
                                            <img src="barcode-placeholder.png" alt="barcode" className="h-8 mr-4"/>
                                            <span>AEC20200096</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="border-b">
                                    <td className={inputname}>Name of the student</td>
                                    <td className="p-2 border border-gray-300"></td>
                                    <td className={inputname}>Email</td>
                                    <td className="p-2 border border-gray-300"></td>
                                </tr>
                                <tr className="border-b">
                                    <td className={inputname}>Gender</td>
                                    <td className="p-2 border border-gray-300"></td>
                                    <td className={inputname}>Phone</td>
                                    <td className="p-2 border border-gray-300"></td>
                                </tr>
                                <tr className="border-b">
                                    <td className={inputname}>Father's Name</td>
                                    <td className="p-2 border border-gray-300"></td>
                                    <td className={inputname}>Caste</td>
                                    <td className="p-2 border border-gray-300"></td>
                                </tr>
                                <tr className="border-b">
                                    <td className={inputname}>Father's Occupation</td>
                                    <td className="p-2 border border-gray-300"></td>
                                    <td className={inputname}>Mother's Name</td>
                                    <td className="p-2 border border-gray-300"></td>
                                </tr>
                                <tr className="border-b">
                                    <td className={inputname}>Mother's Occupation</td>
                                    <td className="p-2 border border-gray-300"></td>
                                    <td className={inputname}>Religion</td>
                                    <td className="p-2 border border-gray-300"></td>
                                </tr>
                                <tr className="border-b">
                                    <td className={inputname}>Blood Group</td>
                                    <td className="p-2 border border-gray-300"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-xl font-medium">Contact Details</p>
                    <div className="m-6">
                    <table className="min-w-full border-collapse border border-gray-300">
                            <tbody>
                                <tr>
                                    <td className={inputname}>Permanent Address</td>
                                </tr>
                                <tr className="p-2 border border-gray-300 h-24">
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>    
  )
}

export default HomePage