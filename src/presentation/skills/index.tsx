import React, { useState } from 'react'

import { ChevronDownIcon } from 'lucide-react'

import { mySkills } from './skills'
import { Badge } from '../../components/ui/badge'

export const Skills = () => {
  const [expanded, setExpanded] = useState(false)

  const toggleSkills = () => {
    setExpanded(!expanded)
  }

  return (
    <div
      className={`relative transition-all duration-500 ease-in-out ${
        expanded ? 'mb-8' : 'pb-0'
      }`}
    >
      <div
        className={`flex flex-wrap ${
          expanded ? 'max-h-[none]' : 'max-h-[6rem] overflow-hidden'
        }`}
      >
        {mySkills.map((skill) => (
          <Badge key={skill} variant="secondary" className="mb-1 mr-1">
            {skill}
          </Badge>
        ))}
      </div>
      <button
        className={`absolute left-0 right-0 z-10 flex h-16 w-full items-end justify-center pb-2 transition-opacity duration-500 ${
          expanded
            ? '-bottom-14 bg-transparent'
            : 'bottom-0 bg-gradient-to-t from-gray-200 to-transparent dark:from-black '
        }`}
        onClick={toggleSkills}
      >
        <div className="flex items-center rounded-md bg-black bg-opacity-50 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
          {expanded ? 'Less' : 'More'}
          <ChevronDownIcon
            className={`ml-1 h-5 w-5 transform transition-transform ${
              expanded ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </div>
      </button>
    </div>
  )
}
