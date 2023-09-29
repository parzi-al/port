import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './styles.module.css'

interface PageProps {
  offset: number
  gradient: string
  onClick: () => void
  text: string // Add a text prop
}

const Page = ({ offset, gradient, onClick, text }: PageProps) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.number}`} offset={offset} speed={0.3}>
    <span className='intro'>{text}</span>
    </ParallaxLayer>
  </>
)

export default function App() {
  const parallax = useRef<IParallax>(null)

  const scroll = (to: number) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }

  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
        {/* Pass different text to each Page */}
        <Page offset={0} gradient="pink" onClick={() => scroll(1)} text="BHAVAN S" />
        <Page offset={1} gradient="pink" onClick={() => scroll(2)} text="ABOUT" />
        <Page offset={2} gradient="pink" onClick={() => scroll(0)} text="PROJECTS" />
      </Parallax>
    </div>
  )
}
