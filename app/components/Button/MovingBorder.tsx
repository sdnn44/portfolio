import { cn } from '@/app/utils/cn';
import React from 'react'
import FollowCursor from '../FollowCursor/FollowCursor';

type Props = {}

export default function MovingBorder({
    children,
    className,
    borderClassName,
}: {
    children: React.ReactNode;
    className: string;
    borderClassName: string;
}) {
    return (
        <FollowCursor>
            <div className="mx-auto w-40 flex items-center justify-center">
                <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-xl border border-slate-800 p-[1.5px]">
                    <div className={cn(
                        "animate-rotate absolute inset-0 h-full w-full rounded-full",
                        borderClassName
                    )}>
                    </div>
                    <div className={cn(
                        "relative z-20 flex justify-center items-center w-full rounded-[0.60rem]",
                        className
                    )}>
                        {children}</div>
                </div>
            </div>
        </FollowCursor>
    )
}