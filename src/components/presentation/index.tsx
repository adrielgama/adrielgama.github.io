import React from 'react'

import { SocialIcons } from '../social'

export const Presentation = () => {
  return (
    <div className="flex flex-col justify-center py-12">
      <p className="text-sm">Hi, I&rsquo;m Adriel</p>
      <div className="relative flex text-start space-x-8 items-baseline">
        <h1 className="font-primary text-4xl font-bold lg:text-8xl md:text-6xl uppercase">
          React
        </h1>
        <SocialIcons />
      </div>
      <h1 className="font-primary text-4xl font-bold lg:text-8xl md:text-6xl uppercase bg-secondary mt-1 pt-2">
        Developer
      </h1>
      <p className="mt-8 max-w-2xl text-justify text-sm md:text-center">
        I&rsquo;m a Front-end developer with 4 years of experience in responsive
        web projects. My strength lies in translating complex designs into
        interactive and efficient interfaces, ensuring compatibility with
        various browsers and devices, with the aim of delivering innovative
        solutions that enhance the user experience.
      </p>
    </div>
  )
}
