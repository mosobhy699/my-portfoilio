// higher order function which i want to apply it for all component to make animation for the div which will contain all components
import React, { Component } from 'react'
import { motion } from 'framer-motion';
const Motion = (Component, classNames) => function HOC() {
    return (
        <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
            className={`${classNames} app__flex`}
        >
            <Component />
        </motion.div>
    )
}

export default Motion