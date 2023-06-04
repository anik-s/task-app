import React from 'react'
import styles from './ContactForm.module.css';

const ItemInput = ({label, onChange, value}) => {
    return (
        <div className={styles.itemInput}>
            <span>{label}</span>
            <input className={styles.input} type="text" value={value} onChange={(event) => onChange(event.target.value)} />
        </div>
    )
}

export default ItemInput