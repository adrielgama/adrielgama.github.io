import React from 'react'

import { useTranslation } from 'react-i18next'

import { SocialIcons } from '../../components/social'

export const AboutMe = () => {
  const { t } = useTranslation()
  const yearsOfExperience = new Date().getFullYear() - 2019

  return (
    <div className="flex flex-col justify-center py-12">
      <p className="text-sm">{t('aboutMe.greeting', { name: 'Adriel' })}</p>
      <div className="relative flex items-baseline space-x-8 text-start">
        <h1 className="font-primary text-4xl font-bold uppercase md:text-6xl lg:text-8xl">
          {t('aboutMe.title')}
        </h1>
        <SocialIcons />
      </div>
      <h1 className="mt-1 bg-secondary pt-2 font-primary text-4xl font-bold uppercase md:text-6xl lg:text-8xl">
        {t('aboutMe.subtitle')}
      </h1>
      <p className="mt-8 max-w-2xl text-justify text-sm md:max-w-6xl md:px-20 lg:px-32">
        {t('aboutMe.description', { yearsOfExperience })}
      </p>
    </div>
  )
}
