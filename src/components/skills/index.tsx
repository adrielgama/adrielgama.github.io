import React from 'react'

import { Badge } from '../ui/badge'

const mySkills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Vite',
  'Tailwind',
  'Shadcn',
  'Styled Components',
  'Bootstrap',
  'Material UI',
  'Storybook',
  'SASS',
  'ZOD',
  'Yup',
  'NPM',
  'Yarn',
  'SEO',
  'Git',
  'GitHub',
  'Jira',
  'Bitbucket',
  'Azure DevOps',
  'AWS Amplify',
  'Node',
  'Express',
  'API RESTful',
  'UI/UX',
  'Figma',
  'Responsive Design',
  'Pixel Perfect',
  'Scrum',
  'Kanban',
]

export const Skills = () => {
  return (
    <div>
      {mySkills.map((skill) => (
        <Badge key={skill} variant="secondary" className="mr-1">
          {skill}
        </Badge>
      ))}
    </div>
  )
}
