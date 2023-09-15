import React from 'react'
// using () not {}
const NavigationDots = ({ active }) => (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a
                // TO NAVIGATE TO THE SECTION USING #id and the active here = idname which i put it in pages when wrapper wrapper.js as higher order function
                href={`#${item}`}
                key={item + index}
                className="app__navigation-dot"
                // ACTIVE BACKGROUND COLOR WITH ACTIVE SECTION
                // IF props which we pass === item change the background of anchor tag
                style={active === item ? { backgroundColor: '#313BAC' } : {}}
            />
        ))}
    </div>)


export default NavigationDots;