import React, { useEffect, useRef } from 'react'
import { easeIn, motion, useAnimation, useInView } from "framer-motion";

type TextRevealProps = {
    children: JSX.Element | JSX.Element[];
    width?: "fit-content" | "100%";
}

const TextReveal = ({ children, width = "fit-content" }: TextRevealProps) => {

    const ref = useRef<HTMLDivElement | any>(null);
    const isInView = useInView(ref, { once: true });

    const triggerTextReveal = useAnimation();
    const triggerSlide = useAnimation();

    useEffect(() => {
        if (isInView) {
            triggerTextReveal.start("visible");
            triggerSlide.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className='relative overflow-hidden' style={{ width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={triggerTextReveal}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: {left: 0},
                    visible: {left: "100%"}
                }}
                initial="hidden"
                animate={triggerSlide}
                transition={{duration: 0.5, ease: easeIn}}
                className="absolute top-[4px] bottom-[4px] left-0 right-0 bg-violet-950 z-20"
            >
            </motion.div>
        </div>
    );
};

export default TextReveal