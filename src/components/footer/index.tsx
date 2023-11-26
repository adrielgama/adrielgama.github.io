import React from 'react'

export const Footer = () => {
  return (
    <footer className="mb-2 text-center text-gray-600">
      © {new Date().getFullYear()} By{' '}
      <a
        href="https://github.com/adrielgama"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adriel Gama - Front-end Developer
      </a>
    </footer>
  )
}
