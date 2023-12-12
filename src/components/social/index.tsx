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
  ariaLabel?: string
}

const TooltipIcon = ({
  IconComponent,
  tooltipContent,
  ariaLabel,
  className,
}: TooltipIconProps) => {
  return (
    <Tooltip>
      <TooltipTrigger aria-label={ariaLabel}>
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
          aria-label="LinkedIn Profile"
        >
          <TooltipIcon
            IconComponent={Linkedin}
            tooltipContent="LinkedIn"
            className="svg fill-white hover:fill-gray-100"
            ariaLabel="LinkedIn Profile"
          />
        </a>
        <a
          href="http://github.com/adrielgama"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github Profile"
        >
          <TooltipIcon
            IconComponent={Github}
            tooltipContent="Github"
            ariaLabel="Github profile"
          />
        </a>
        <a href="/resume.pdf" download="resume.pdf" aria-label="Resume">
          <TooltipIcon
            IconComponent={FileText}
            tooltipContent="Resume download"
            ariaLabel="Resume CV Download"
          />
        </a>
      </TooltipProvider>
    </div>
  )
}
