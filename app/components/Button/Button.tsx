"use client";
import React from 'react';
import { useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import FollowCursor from '../FollowCursor/FollowCursor';

interface ButtonProps {
  children: ReactNode;
  backgroundColor?: string;
  className: string;
  label: string;
}

export default function Button({ children, className, label, backgroundColor = "#3c1779", ...attributes }: ButtonProps) {

  const circle = React.useRef<HTMLDivElement | any>(null);
  const text = React.useRef<HTMLDivElement | any>(null);
  const timeline = React.useRef<HTMLDivElement | any>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(circle.current, { top: "-25%", width: "100%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "70%", duration: 0.25, delay: 0.3 }, "exit");
  }, []);

  const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    timeline.current.tweenFromTo("enter", "exit");
    circle.current.style.borderRadius = "0";
    text.current.style.color = "white";
  }

  const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): any => {
    timeline.current.play();
    if (circle.current) {
      setTimeout(() => {
        circle.current.style.borderRadius = "50%";
        text.current.style.color = "transparent";
      }, 250);
    }
  }

  return (
    <FollowCursor>
      <div className={className}
        style={{ overflow: 'hidden' }}
        {...attributes}
        onMouseEnter={(e) => { manageMouseEnter(e) }}
        onMouseLeave={(e) => { manageMouseLeave(e) }}
      > {
          children
        }
        <div ref={circle} className="w-1/3 h-[150%] absolute top-[120%] left-0 skew-x-[20deg]" style={{ backgroundColor }}>
          <div ref={text} className='flex content-center mt-7 justify-center -skew-x-[20deg] text-white font-bold'>
            {label}
          </div>
        </div >
      </div >
    </FollowCursor>
  );
}