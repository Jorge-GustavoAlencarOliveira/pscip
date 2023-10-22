import React from 'react'
import { accordionReducer } from './accordionReducer'
import styles from '../../src/pages/home.module.css'

interface AccordionProps {
  title?: string
  show?: boolean
  children?: React.ReactNode
}

const Accordion = ({ title = 'Accordion Title', show = false, children }: AccordionProps) => {
  const accordionBodyRef = React.useRef<HTMLDivElement>(null)
  const [{ collapse }, dispatch] = React.useReducer(accordionReducer, {
    collapse: show
  })
  const randomId = React.useRef(window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36))

  React.useEffect(() => {
    if (show) dispatch({ type: 'show' })
  }, [show])

  return (
    <div className={styles.accordionItem}>
      <h2 className={`text-primary ${styles.accordionHeader}`} id={`heading-${randomId.current}`}>
        <button
          className={collapse ? styles.accordionButton : `${styles.accordionButton} ${styles.collapsed}`}
          type='button'
          aria-expanded={collapse}
          aria-controls={`collapse-${randomId.current}`}
          onClick={() => dispatch({ type: 'collapse' })}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse-${randomId.current}`}
        aria-labelledby={`heading-${randomId.current}`}
        className={'accordion-collapse'}
        style={
          collapse
            ? {
                height: accordionBodyRef.current?.clientHeight + 250,
                transition: 'height 0.2s ease',
                overflowY: 'auto'
              }
            : {
                height: 0,
                transition: 'height 0.2s ease',
                overflow: 'hidden'
              }
        }
      >
        <div className={styles.accordionBody} ref={accordionBodyRef}>
          {children}
        </div>
      </div>
    </div>
  )
}


export default Accordion