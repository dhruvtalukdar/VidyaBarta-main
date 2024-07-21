import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AiOutlineMenu } from "react-icons/ai"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TooltipComponent } from "@syncfusion/ej2-react-popups"
import { useStateContext } from "../contexts/ContextProvider.jsx"

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button" 
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const navigate = useNavigate()
  const { user, logoutUser } = useStateContext()

  const logoutClick = () => {
    navigate('/sign-in')
  }

  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return ( 
    <div className="flex justify-between p-2 md:ml-6  md:mr-6 relative">
      <NavButton
       title="Menu" 
       customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
       color="blue" 
       icon={<AiOutlineMenu />}
       />

      <p className="mt-2 md:flex md:text-xl xl:text-2xl hidden">॥ यत् भावो – तत् भवति ॥   ॥You become-what you believe॥</p>

      <div className="flex">
        <button onClick={logoutUser} className="border rounded p-2 bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white">Logout</button>
      </div>

    </div>
  )
}

export default Navbar