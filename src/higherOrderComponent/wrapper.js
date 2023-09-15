import React from 'react'
import NavigationDots from './Dots'
import SocialMedia from './SocialMedia'
//MADE HIGHER ORDER COMPONENT TO MADE SOCAIL ICONS AND DOTS IN ALL SECTION  BY WRAP THIS COMPONENT TO ALL COMPONENTS
// hoc function using to add small compnents above page 
const wrapper = (Component, idName, classNames) => function HOC() {
  // to active scroll between section you need id for section and <a href={#id}>
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className='app__wrapper app__flex'>
        <Component />
      </div>
      <NavigationDots active={idName} />
    </div>

  )
}

export default wrapper;