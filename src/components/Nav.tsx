import React from 'react'
import Link from 'next/link'

function Nav() {
  return (
    <header>
        <nav>
            <ul className='nav-list'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/About"><li>About</li></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Nav