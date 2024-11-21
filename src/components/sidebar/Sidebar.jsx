import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { delay, motion, spring } from 'framer-motion'
import { useState } from 'react'

const variants={
    open:{
        clipPath: "circle(1200px at 50px 50px)",
        transition : {
            type : "spring",
            stiffness: 20,
        }
    },
    closed:{
        // clipPath allows us to give custom shape
        clipPath: "circle(30px at 50px 50px)",
        transition : {
            type : "spring",
            stiffness: 150,
            damping: 40,
        }
    }
}
function Sidebar() {
    const [open, setOpen] = useState(false)

  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={()=>setOpen(!open)}/>
    </motion.div>
  )
}

export default Sidebar