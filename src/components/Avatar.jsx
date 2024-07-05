import styles from './Avatar.module.css';

export function Avatar({ hasborder = true, src}) {

    return (
        <img className={hasborder ? styles.avatarwithborder : styles.avatar} 
        src={src} />
);
};