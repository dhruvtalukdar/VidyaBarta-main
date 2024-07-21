import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { FiSettings } from "react-icons/fi"
import { Navbar, Sidebar, Footer } from "../components";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";




const RootLayout = () => {
    const { activeMenu } = useStateContext();

  return (
    <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
                content="Settings"
                position="Top"
            >
                <button
                    type="button"
                    style={{ borderRadius: '50%' }}
                    className="text-3xl text-slate-800 p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                <FiSettings />
                </button>
            </TooltipComponent>
        </div>
            {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
            </div>
            ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
            </div>
            )}
        <div
        className={
            activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
        >
            <div className="flex flex-col">
                <div className=" md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                    <Navbar />
                </div>
                <div className="overflow-hidden">
                    <Outlet />
                </div>
            
            </div>

            <Footer />
        </div>
  </div>
  )
}

export default RootLayout