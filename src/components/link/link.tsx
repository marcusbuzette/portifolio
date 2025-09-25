import React from 'react';
import styles from './link.module.css'

const Link = ({children, ...rest}:  React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return <a className={styles.link} {...rest}>{children}</a>;
};

export default Link;