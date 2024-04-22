import { cn } from "@/app/utils/cn";
import { time } from "console";
import { AnimatePresence, motion, MotionValue, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { IconType } from 'react-icons';

export const HoverEffect = ({
    items,
    className,
    opacity,
    y,
}: {
    items: {
        title: string;
        Icon: IconType;
    }[];
    className?: string;
    opacity: MotionValue<number>;
    y: MotionValue<string>;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement | any>(null);

    return (
        <motion.div
            style={{ opacity, y, zIndex: 0 }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
                className
            )}
        >
            {items.map((item, idx) => {
                const Icon = item.Icon;
                return <div
                    key={idx}
                    className="relative group block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-violet-900/20 dark:bg-slate-800/[0.8] block rounded-lg"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <div className="w-full p-4 cursor-pointer bg-black group-hover:ring-2 ring-violet-600 relative z-20 transition-all duration-500 rounded-md">
                        <div className="py-10 z-30 relative flex gap-6 flex-col">
                            <Icon className="mx-auto w-8 h-8" />
                            <motion.div
                                initial="initial"
                                whileHover="whileHover"
                                // className="py-4"
                                className='flex flex-col justify-center items-center gap-4'>
                                <motion.span
                                    variants={{
                                        initial: { x: 0 },
                                        whileHover: { x: -7 },
                                    }}
                                    transition={{
                                        type: "spring",
                                        staggerChildren: 0.075,
                                        delayChildren: 0.25,
                                    }}
                                    className="text-xl font-bold text-center text-gray-400"
                                >
                                    {item.title.split("").map((l, i) => (
                                        <motion.span
                                            variants={{
                                                initial: { x: 0 },
                                                whileHover: { x: 7 },
                                            }}
                                            transition={{ type: "spring" }}
                                            className="inline-block cursor-pointer mx-[1.2px]"
                                            key={i}
                                        >
                                            {l}
                                        </motion.span>
                                    ))}
                                </motion.span>
                            </motion.div>
                            {/* <p className="text-xl font-bold text-center text-gray-400">{item.title}</p> */}
                        </div>
                    </div>
                </div>
            })}
        </motion.div>
    );
};

