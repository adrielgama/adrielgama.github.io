import React from 'react'

import { cacheImages } from '@/lib/cacheImages'

import { Card } from './card'
import { myProjects } from './projects'

export const MyProjects = () => {
  React.useEffect(() => {
    cacheImages(myProjects)
  }, [])

  return (
    <div className="py-8">
      <h1 className="mb-4 border-l-4 pl-2 text-2xl font-bold">Projects</h1>
      {myProjects.map((project) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          key={project.title}
          aria-label={`Project ${project.title} link`}
        >
          <div className="mb-2 flex cursor-pointer flex-col rounded bg-gray-100 px-2 transition-all hover:bg-gray-200 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 md:flex-row md:bg-transparent">
            <img
              src={project.image}
              alt={project.title}
              className="my-4 mr-2 max-h-60 object-contain"
            />
            <Card {...project} />
          </div>
        </a>
      ))}
    </div>
  )
}
