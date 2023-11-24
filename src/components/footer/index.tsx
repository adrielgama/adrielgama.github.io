import React from 'react'

export const Footer = () => {
  return (
    <footer className="absolute bottom-2 text-gray-600">
      © {new Date().getFullYear()} By{' '}
      <a
        href="https://github.com/adrielgama"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adriel Gama
      </a>
    </footer>
  )
}
