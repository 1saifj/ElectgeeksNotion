import * as React from 'react'
import useDarkMode from '@fisch0920/use-dark-mode'
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram'
import { FaZhihu } from '@react-icons/all-files/fa/FaZhihu'
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram'
import { FaFacebook } from '@react-icons/all-files/fa/FaFacebook'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const FooterImpl: React.FC = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const darkMode = useDarkMode(false, { classNameDark: 'dark-mode' })

  const onToggleDarkMode = React.useCallback(
    (e) => {
      e.preventDefault()
      darkMode.toggle()
    },
    [darkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2022 {config.author}</div>

      <div className={styles.settings}>
        {hasMounted && (
          <a
            className={styles.toggleDarkMode}
            href='#'
            role='button'
            onClick={onToggleDarkMode}
            title='Toggle dark mode'
          >
            {darkMode.value ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        )}
      </div>

      <div className={styles.social}>
        {config.instagram && (
          <a
            className={styles.instagram}
            href={`https://instagram.com/${config.instagram}`}
            title={`Instagram @${config.instagram}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        )}

        {config.zhihu && (
          <a
            className={styles.zhihu}
            href={`https://zhihu.com/people/${config.zhihu}`}
            title={`Zhihu @${config.zhihu}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaZhihu />
          </a>
        )}

        {config.facebook && (
          <a
            className={styles.facebook}
            href={`https://facebook.com/${config.facebook}`}
            title={`Facebook @${config.facebook}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
        )}

        {config.telegram && (
          <a
            className={styles.telegram}
            href={`https://www.t.me/${config.telegram}`}
            title={`Telegram ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTelegram />
          </a>
        )}
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
