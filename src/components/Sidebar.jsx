import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummyMain';
import { useStateContext } from '../contexts/ContextProvider.jsx';


const Sidebar = () => {

  const {activeMenu, setActiveMenu, screenSize} = useStateContext();
  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }



  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white bg-slate-900 text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-slate-300 hover:text-white hover:bg-slate-900 m-2';

  return (
    <div className='bg-slate-800 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link to="./" onClick={handleCloseSideBar}
            className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight text-slate-300'>
              <SiShopware /> <span>VidyaBarta</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={handleCloseSideBar} 
                style={{ }}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel className='text-slate-300'/>
              </button>
            </TooltipComponent>
          </div> 
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>
                {item.links.map((Link) => (
                  <NavLink
                    to={`/${Link.to}`}
                    key={Link.name}
                    onClick=""
                    className={({ isActive }) => 
                    isActive ? activeLink : normalLink }
                  > 
                    {Link.icon}
                    <span className='capitalize'>
                      {Link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
      </>)}
    </div>
  )
}

export default Sidebar