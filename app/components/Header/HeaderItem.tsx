import { motion } from "framer-motion";

interface HeaderItemProps {
    children: React.ReactNode; 
    href: string; 
}

const HeaderItem = ({ children, href }: HeaderItemProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='nav-item hover-target'>
                <a href={href} className=''>{children}</a>
                <div className='indicator indicator-transition'></div>
        </motion.div>
    );
};

export default HeaderItem;