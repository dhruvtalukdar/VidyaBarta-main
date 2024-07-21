import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiVideoOn } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import { BsEnvelopePaper } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { FaNewspaper } from "react-icons/fa";
import { FaDiscourse } from "react-icons/fa";
import { MdBookOnline } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { FaPerson } from "react-icons/fa6";




export const links = [
  {
    title: 'Dashboard',
    links: [ 
      {
        name: 'Dashboard',
        icon: <MdDashboard />,
        to: '',
      },
    ],
  },
  {
    title: 'Pages',
    links: [
      {
        name: 'My Profile',
        icon: <CgProfile />,
        to: 'myprofile'
      },
      {
        name: 'Barta(video call option)',
        icon: <CiVideoOn />,
        to: 'barta'
      },
      {
        name: 'Fee payment',
        icon: <MdOutlinePayment />,
        to: 'feepayment'
        
      },
      {
        name: 'Leave Application',
        icon: <BsEnvelopePaper />,
        to: 'leave-application'
      },
      {
        name: 'Attendance',
        icon: <FaPerson />,
        to: 'attendance'
      },
      {
        name: 'Time Tabe',
        icon: <CiTimer />,
        to: 'time-table'
      },
      {
        name: 'Notice',
        icon: <FaNewspaper />,
        to: 'notice'
      },
      {
        name: 'My Courses',
        icon: <FaDiscourse />,
        to: 'my-courses'
      },
      {
        name: 'Online Classes',
        icon: <MdBookOnline />,
        to: 'online-classes'
      },
      {
        name: 'EdNews',
        icon: <IoNewspaper />,
        to: 'ednews'
      },
      {
        name: 'School Info',
        icon: <IoIosInformationCircle />,
        to: 'school-info'
      },
      
    ],
  },
//   {
//     title: 'Apps',
//     links: [
//       {
//         name: 'calendar',
//         icon: <AiOutlineCalendar />,
//       },
//       {
//         name: 'kanban',
//         icon: <BsKanban />,
//       },
//       {
//         name: 'editor',
//         icon: <FiEdit />,
//       },
//       {
//         name: 'color-picker',
//         icon: <BiColorFill />,
//       },
//     ],
//   },
//   {
//     title: 'Charts',
//     links: [
//       {
//         name: 'line',
//         icon: <AiOutlineStock />,
//       },
//       {
//         name: 'area',
//         icon: <AiOutlineAreaChart />,
//       },
//       {
//         name: 'bar',
//         icon: <AiOutlineBarChart />,
//       },
//       {
//         name: 'pie',
//         icon: <FiPieChart />,
//       },
//       {
//         name: 'financial',
//         icon: <RiStockLine />,
//       },
//       {
//         name: 'color-mapping',
//         icon: <BsBarChart />,
//       },
//       {
//         name: 'pyramid',
//         icon: <GiLouvrePyramid />,
//       },
//       {
//         name: 'stacked',
//         icon: <AiOutlineBarChart />,
//       },
//     ],
//   },
];
