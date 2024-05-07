import { cn } from '@/app/utils/cn';
import React from 'react'

interface Props {
    show: boolean;
    color: string;
}

export default function FlyoutLink({ show, color}: Props) {
    return (
        <span
            style={{
                transform: show ? "scaleX(1)" : "scaleX(0)",
            }}
            className={cn(
                "absolute -bottom-2 left-0 right-0 h-[1px] w-[100%] origin-left scale-x-0 rounded-full transition-transform duration-700 ease-out",
                color
            )}
        />
    )
}