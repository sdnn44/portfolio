import { motion } from "framer-motion";
import { useState } from "react";
import FlyoutLink from "../FlyoutLink/FlyoutLink";

interface HeaderItemProps {
    children: React.ReactNode;
    href: string;
}

const HeaderItem = ({ children, href }: HeaderItemProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className='nav-item hover-target '
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                className=''
            >
                {children}
                <FlyoutLink show={open} color="bg-[#5a21b5]" />
            </motion.a>
        </div>
    );
};

export default HeaderItem;