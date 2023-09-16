import {motion} from "framer-motion"
import ReactTyped from "react-typed"

export default function Header () {
    return (
        <header>
            <div>
                <motion.div
                    transition= {{ ease: "easeOut", duration:2}}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 1.1 }}
                >
                    <img src="https://pic.onlinewebfonts.com/thumbnails/animations_367347.svg?width=2"/>
                </motion.div>
            </div>
            <div>
                < ReactTyped 
                    strings={["Sky Watch Pro", "Track your LOVED ones!"]} 
                    typeSpeed={150}
                    loop 
                    backSpeed={20}
                    className="typed-text"
                />
            </div>
        </header>
    )
}