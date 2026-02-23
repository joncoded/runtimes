'use client'

import Link from 'next/link'

export function Footer() {  

  return (
    <footer className="bg-black dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                  
        <p className="text-md text-white">a <a href="https://joncoded.com" className="text-green-600 hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">joncoded.com</a> and <a href="https://claude.ai" className="text-orange-600 hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">claude.ai</a> project</p>
         
        
      </nav>
    </footer>
  )
}
