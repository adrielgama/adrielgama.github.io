import React from 'react'

import { Linkedin, Github, FileText } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

import { useLanguage } from '../language-provider'

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
  const { language } = useLanguage()
  return (
    <div className="flex gap-4">
      <a
        href={
          language === 'en'
            ? 'http://www.linkedin.com/in/adrielgama'
            : 'https://www.linkedin.com/in/adrielgama/?locale=pt_BR'
        }
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <TooltipIcon
          IconComponent={Linkedin}
          tooltipContent="LinkedIn"
          className="svg fill-white hover:text-blue-500 dark:hover:fill-blue-500 dark:hover:text-blue-500"
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
          className="hover:text-blue-500"
        />
      </a>
      <a
        href={language === 'en' ? 'resume.pdf' : 'resume_pt.pdf'}
        download={language === 'en' ? 'resume.pdf' : 'resume_pt.pdf'}
        aria-label="Resume"
      >
        <TooltipIcon
          IconComponent={FileText}
          tooltipContent="Resume download"
          ariaLabel="Resume CV Download"
          className="hover:text-blue-500"
        />
      </a>
    </div>
  )
}
