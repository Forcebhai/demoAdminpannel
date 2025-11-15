import {useState} from "react";
import logo from "../dashboard-assets/logo.png";
import RightArrow from "../dashboard-assets/rightArrow.svg";
import { motion } from "motion/react"
import {
    LayoutDashboard,
    Clock3,
    BarChart2,
    ArrowRightLeft,
    HelpCircleIcon
} from "lucide-react";

const navlinks = [
    {
        name: "Dashboard",  
        icon: LayoutDashboard,
    },
    {
        name: "Activity",  
        icon: Clock3,
    },
    {
        name: "Analytics",  
        icon: BarChart2,
    },
    {
        name: "Transactions",  
        icon: ArrowRightLeft,
    },
    {
        name: "Helpcenters",  
        icon: HelpCircleIcon
    }
];

const variants = {
    // We'll animate the width and padding
   expanded: { 
      width: "20%", 
    },
    nonExpanded: { 
      width: "5%",  // A fixed smaller width
      },
};

const Navbar = () => {

    const [isExpanded, setIsExpanded] = useState(true);


  return (
    <motion.div 
     animate={isExpanded ? "expanded":"nonExpanded"}
     variants={variants}
    
    
    className={" py-12 flex-col border w-1/5 h-screen border-r border-gray-200 relative"+(isExpanded ? " px-10":" px-4")}>       
        <div className="logo-div flex space-x-3 items-center font-extrabold text-2xl">
            <img src={logo} alt="logo" />
            <span className={isExpanded ? "block":"hidden"}>FraudTracker</span>
        </div>  

        <div onClick ={() => setIsExpanded(expanded => !expanded) }
        className="w-5 h-5 bg-red-300 rounded-full absolute -right-[10.5px] top-13 flex items-center justify-center">
            <img src={RightArrow} className="w-3 h-2 object-contain" />
        </div>

        <div className="mt-10 flex flex-col space-y-8 w-full">
            {navlinks.map((item, index) => {
                const IconComponent = item.icon;
                return (
                    <div key={index} className="navlink font-bold hover:bg-red-300 p-2 flex space-x-3 rounded cursor-pointer">
                        <IconComponent className=" mr-1"/>
                        <span className={isExpanded ? "block":"hidden"}>{item.name}</span>
                    </div>
                );
            })}
        </div>
    </motion.div>
  );
}

export default Navbar;