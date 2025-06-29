import React from 'react'
import classes from './index.module.scss'

interface CustomHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
}

export const CustomHero: React.FC<CustomHeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText = 'Learn More',
  ctaLink = '#'
}) => {
  return (
    <div 
      className={classes.customHero}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      <div className={classes.content}>
        <h1 className={classes.title}>{title}</h1>
        {subtitle && <p className={classes.subtitle}>{subtitle}</p>}
        <a href={ctaLink} className={classes.cta}>
          {ctaText}
        </a>
      </div>
    </div>
  )
} 