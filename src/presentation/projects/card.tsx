import React from 'react'

import { Badge } from '@/components/ui/badge'

interface ProjectProps {
  title: string
  description: string
  technologies: string[]
}

export const Card: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <div className="my-2 rounded p-6">
      <>
        <div key={title}>
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="my-4">{description}</p>

          {technologies.map((technology) => (
            <Badge key={technology} className="mr-1">
              {technology}
            </Badge>
          ))}
        </div>
      </>
    </div>
  )
}
