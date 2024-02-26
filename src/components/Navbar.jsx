import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" }
}

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center gap-2' onClick={() => { setActive(""); window.scrollTo(0, 0) }}>
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Tsion</p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id} className={`${
              active === link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18ppx] font-medium cursor-pointer`}>
              {link.href ? (
                <a href={link.href} download={link.download}>{link.title}</a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <motion.div
            animate={toggle ? "open" : "closed"}
            variants={variants}
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0  w-full z-10 `}
          >
            <ul className="list-none flex  justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } font-medium cursor-pointer text-[16px] font-poppins`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {link.href ? (
                    <a href={link.href} download={link.download}>{link.title}</a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
