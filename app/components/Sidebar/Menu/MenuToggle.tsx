import { motion, SVGMotionProps } from 'framer-motion';
import React from 'react'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isEnable: boolean;
};

const Path = (props: React.JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export default function MenuToggle({ setOpen, isEnable }: Props) {
    return (
        isEnable ? (
            <button
                onClick={() => setOpen((prev: boolean) => !prev)}
                className="w-[20px] h-[20px] md:w-[50px] md:h-[50px] rounded-xl fixed left-[15px] md:left-[25px] top-[20px] md:top-[25px] flex items-center justify-center z-20">
                <svg width="23" height="23" viewBox="0 0 23 23">
                    <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.1 }}
                    />
                    <Path
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                </svg>
            </button>
        ) : <></>
    );
}