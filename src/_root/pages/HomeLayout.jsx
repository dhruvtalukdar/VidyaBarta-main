import {NavLink, Outlet} from 'react-router-dom';

const HomeLayout = () => {
  const activeLink = "bg-white px-4 py-2 shadow-sm rounded";
  const normalLink = "px-4 py-2";

  return (
    <div className="bg-slate-200 w-full min-h-screen overflow-y-auto text-black p-8 m-4">
      <p>Home / Profile</p>
      <div className="flex mt-6 text-sm gap-1 lg:text-base border-b-2 border-gray-300 shadow-sm">
        <NavLink
          className={({ isActive }) => 
            isActive ? activeLink : normalLink }
          to="/myprofile">
          Basic Details
        </NavLink>
        <NavLink
          className={({ isActive }) => 
            isActive ? activeLink : normalLink }
          to="/contact-details">
          Contact Details
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            isActive ? activeLink : normalLink }
          to="/exam-details">
          Admit/Results
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            isActive ? activeLink : normalLink }
          to="/documents">
          Documents Requests
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            isActive ? activeLink : normalLink }
          to="/class-teachers">
          Class Teachers
        </NavLink>
        <NavLink 
          className={({ isActive }) => 
            isActive ? activeLink : normalLink }
          to="/ebooklets">
          E-Booklets
        </NavLink>
      </div>
      <div className='bg-slate-100 mt-2 w-full h-screen overflow-y-auto mb-2 text-black'>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout