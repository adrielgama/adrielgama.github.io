import React from 'react'

import { Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  link: string
  linkProject?: string
}

export const Card: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  link,
  linkProject,
}) => {
  const { t } = useTranslation()

  return (
    <div key={title} className="my-2 rounded p-6">
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="my-4">{description}</p>

      {technologies.map((technology) => (
        <Badge key={technology} className="mr-1">
          {technology}
        </Badge>
      ))}

      <div className="flex justify-end space-x-4 pt-4">
        <Button variant="link" asChild className="hover:text-blue-500">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Project ${title} link`}
          >
            {t('projects.seeLink')}
          </a>
        </Button>
        {linkProject && (
          <a
            href={linkProject}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Project ${title} GitHub link`}
          >
            <Button variant="link" className="hover:text-blue-500">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </a>
        )}
      </div>
    </div>
  )
}
