import { motion } from "framer-motion";
import FollowCursor from "../FollowCursor/FollowCursor";

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
            <FollowCursor>
                <a href={href} className=''>{children}</a>
            </FollowCursor>
                {/* <div className='indicator indicator-transition'></div> */}
        </motion.div>
    );
};

export default HeaderItem;