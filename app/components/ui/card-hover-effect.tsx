import { cn } from "@/app/utils/cn";
import { time } from "console";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
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
        opacity: MotionValue<number>;
        y: MotionValue<number>;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <motion.div
            style={{ opacity, y, zIndex: 0 }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 py-10",
                className
            )}
        >
            {items.map((item, idx) => {
                const Icon = item.Icon;
                return <div
                    key={idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-violet-950 dark:bg-slate-800/[0.8] block rounded-lg"
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
                            <p className="text-xl font-bold text-center text-gray-400">{item.title}</p>
                        </div>
                    </div>
                </div>
            })}
        </motion.div>
    );
};

