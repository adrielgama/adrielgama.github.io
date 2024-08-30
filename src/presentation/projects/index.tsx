import React from 'react'

import { useTranslation } from 'react-i18next'

import { cacheImages } from '@/lib/cacheImages'

import { Card } from './card'
import { myProjects } from './projects'

export const MyProjects = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    cacheImages(myProjects)
  }, [])

  return (
    <div className="py-8">
      <h1 className="mb-4 border-l-4 pl-2 text-2xl font-bold">
        {t('projects.title')}
      </h1>
      {myProjects.map((project) => (
        <div
          key={project.title}
          className="mb-2 flex flex-col rounded bg-gray-100 px-2 transition-all hover:bg-gray-200 dark:bg-gray-800/30 dark:hover:bg-gray-800/50 md:flex-row md:bg-transparent"
        >
          <img
            src={project.image}
            alt={project.title}
            className="my-4 mr-2 max-h-60 object-contain"
          />
          <Card
            title={project.title}
            description={t(`projects.${project.i18n}`)}
            technologies={project.technologies}
            link={project.link}
            linkProject={project.projectLink}
            development={project.development}
          />
        </div>
      ))}
    </div>
  )
}
