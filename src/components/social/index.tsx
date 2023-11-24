import React from 'react'

import { Linkedin, Github, FileText } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

interface TooltipIconProps extends React.SVGProps<SVGSVGElement> {
  IconComponent: React.ComponentType<{ className?: string }>
  tooltipContent: string
}

const TooltipIcon = ({
  IconComponent,
  tooltipContent,
  className,
}: TooltipIconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger>
        <IconComponent className={cn(className)} />
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipContent}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <TooltipProvider>
        <TooltipIcon
          IconComponent={Linkedin}
          tooltipContent="LinkedIn"
          className="fill-white hover:fill-gray-100 svg"
        />
        <TooltipIcon IconComponent={Github} tooltipContent="Github" />
        <TooltipIcon
          IconComponent={FileText}
          tooltipContent="Resume download"
        />
      </TooltipProvider>
    </div>
  )
}
