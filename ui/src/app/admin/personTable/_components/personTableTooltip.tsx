'use client';
import React, { useRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from '@/components/ui/tooltip';

const PersonTableTooltip = ({ children, value, side }: { children: React.ReactNode; value: string; side: string }) => {
    const ref = useRef<HTMLButtonElement>(null);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild ref={ref}>
                    {children}
                </TooltipTrigger>
                <TooltipContent
                    className="max-w-[190px] max-h-[180px] text-center whitespace-normal break-words bg-black text-white "
                    side={side}
                >
                    <TooltipArrow />
                    <p>{value}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default PersonTableTooltip;
