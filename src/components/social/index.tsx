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
        <IconComponent className={`${cn(className)} md:h-8 md:w-8`} />
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
        <a
          href="http://www.linkedin.com/in/adrielgama"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <TooltipIcon
            IconComponent={Linkedin}
            tooltipContent="LinkedIn"
            className="svg fill-white hover:fill-gray-100"
          />
        </a>
        <a
          href="http://github.com/adrielgama"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github profile"
        >
          <TooltipIcon IconComponent={Github} tooltipContent="Github" />
        </a>
        <a href="/resume.pdf" download="resume.pdf" aria-label="Resume">
          <TooltipIcon
            IconComponent={FileText}
            tooltipContent="Resume download"
          />
        </a>
      </TooltipProvider>
    </div>
  )
}
