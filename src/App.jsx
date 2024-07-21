import { Routes, Route } from 'react-router-dom';
import "./App.css"
import PrivateRoutes from './utils/PrivateRoutes'

import SigninForm from './_auth/forms/SigninForm';
import RootLayout from './_root/RootLayout';
import { HomeLayout, HomePage, BasicDetailsPage, ContactDetailsPage, ExamDetailsPage, DocumentsPage, ClassTeachersPage, EBookletsPage, ResultsPage, Barta, FeePayment, LeaveApplication, Attendance, TimeTable, Notice, MyCourses, OnlineCourses, EdNews, SchoolInfo } from './_root/pages';


const App = () => {
    return (
        <main className=""> 
            <Routes>

                    {/* public routes */}
                    <Route path="/sign-in" element={<SigninForm />} />


                    {/* private routes */}
                    <Route element={<PrivateRoutes />}>
                        <Route element={<RootLayout />}>
                            <Route path='/barta' element={<Barta />} />
                            <Route path='/feepayment' element={<FeePayment />} />
                            <Route path='/leave-application' element={<LeaveApplication />} />
                            <Route path='/attendance' element={<Attendance />} />
                            <Route path='/time-table' element={<TimeTable />} />
                            <Route path='/notice' element={<Notice />} />
                            <Route path='/my-courses' element={<MyCourses />} />
                            <Route path='/online-classes' element={<OnlineCourses />} />
                            <Route path='/Ednews' element={<EdNews />} />
                            <Route path='/school-info' element={<SchoolInfo />} />
                            <Route index element={<HomePage/>}/>
                            <Route element={<HomeLayout />}>
                                <Route path='/myprofile' element={<BasicDetailsPage/>} />
                                <Route path='/contact-details' element={<ContactDetailsPage/>} />
                                <Route path='/exam-details' element={<ExamDetailsPage/>} />
                                <Route path='/documents' element={<DocumentsPage/>} />
                                <Route path='/class-teachers' element={<ClassTeachersPage/>} />
                                <Route path='/ebooklets' element={<EBookletsPage/>} />
                            </Route>
                        </Route>



                        <Route path='/exam-details/results' element={<ResultsPage />}/>
                    </Route>

            </Routes>

        </main>
    )
}

export default App