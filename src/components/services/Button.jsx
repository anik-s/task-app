import React from 'react'

import PropTypes from 'prop-types'

import styles from './styles.module.css'
import Image from 'next/image';

const Button = ({text, ...props}) => {
    return (
        <div className={` ${styles['btn']} ${styles[props.rootClassName]} `}>
            <Image
                alt={props.Rectangle1792_alt}
                src={props.Rectangle1792_src}
                className={styles['rectangle1792']}
            />
            <span className={styles['text']}>
            <span>{text}</span>
          </span>
        </div>
    )
}

Button.defaultProps = {
    Rectangle1792_src: '/playground_assets/rectangle17924991-mxtzh.svg',
    Rectangle1792_alt: 'Rectangle17924991',
    rootClassName: '',
}

Button.propTypes = {
    Rectangle1792_src: PropTypes.string,
    Rectangle1792_alt: PropTypes.string,
    rootClassName: PropTypes.string,
}

export default Button
