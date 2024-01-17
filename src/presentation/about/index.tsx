import React from 'react'

import { SocialIcons } from '../../components/social'

export const AboutMe = () => {
  const yearsOfExperience = new Date().getFullYear() - 2019

  return (
    <div className="flex flex-col justify-center py-12">
      <p className="text-sm">Hi, I&rsquo;m Adriel</p>
      <div className="relative flex items-baseline space-x-8 text-start">
        <h1 className="font-primary text-4xl font-bold uppercase md:text-6xl lg:text-8xl">
          React
        </h1>
        <SocialIcons />
      </div>
      <h1 className="mt-1 bg-secondary pt-2 font-primary text-4xl font-bold uppercase md:text-6xl lg:text-8xl">
        Developer
      </h1>
      <p className="mt-8 max-w-2xl text-justify text-sm md:max-w-6xl md:px-20 lg:px-32">
        I&rsquo;m a Front-end developer with {yearsOfExperience}+ years of
        experience in responsive web projects. My strength lies in translating
        complex designs into interactive and efficient interfaces, ensuring
        compatibility with various browsers and devices, with the aim of
        delivering innovative solutions that enhance the user experience.
      </p>
    </div>
  )
}
