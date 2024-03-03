"use client";
import React, { useRef } from 'react'
import { useFollowPointer } from '@/app/hooks/use-follow-pointer';
import { motion } from 'framer-motion';

type Props = {}

export default function Hero({ }: Props) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001
        }}
      />
    </div>
  );

}