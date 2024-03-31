"use client";
import React from 'react';
import { useEffect, ReactNode } from 'react';
import gsap from 'gsap';

interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  className: string;
  label: string;
}

export default function Button({ children, className, label, backgroundColor = "#3c1779", ...attributes }: ButtonProps) {

  const circle = React.useRef<HTMLDivElement | any>(null);
  const timeline = React.useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "100%", duration: 0.2, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "100%", duration: 0.25 }, "exit");
  }, []);

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    timeline.current.tweenFromTo("enter", "exit");
  }

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    timeline.current.play();
  }

  return (
    <div className={className}
      style={{ overflow: 'hidden' }}
      {...attributes}
      onMouseEnter={(e) => { manageMouseEnter(e) }}
      onMouseLeave={(e) => { manageMouseLeave(e) }}
    > {
        children
      }
      <div ref={circle} className="w-1/3 h-[150%] absolute top-[120%] left-0 -skew-x-[20deg]" style={{ backgroundColor }}>
        <div className='flex content-center mt-7 justify-center skew-x-[20deg] text-white'>
          {label}
        </div>
      </div >
    </div >
  );
}