import gsap from 'gsap';
import React, { ReactElement, useEffect, useRef } from 'react';

type FollowCursorProps = {
    children: ReactElement;
};
const FollowCursor = ({ children }: FollowCursorProps) => {

    const followCursorRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = followCursorRef.current;
        if (!element) return;

        const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.4)" });
        const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.4)" });

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = element.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x*0.4);
            yTo(y*0.4);
        };

        const handleMouseLeave = () => {
            // Reset the position of child elements to their default values
            xTo(0);
            yTo(0);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };

    }, []);

    return React.cloneElement(children, { ref: followCursorRef });
};

export default FollowCursor;