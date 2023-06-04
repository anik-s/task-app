import React, { useState } from 'react'
import styles from './ContactForm.module.css';
import ItemInput from './ItemInput';
import axios from 'axios';

const ContactForm = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');
    const [erreurs, setErreurs] = useState({});


    const handleSubmit = async (event) => {
        event.preventDefault();
        const erreurs = {};
        if (!fullName.trim()) {
            erreurs.fullName = 'Please enter a name.';
        }
        if (!object.trim()) {
            erreurs.object = 'Please enter a name.';
        }
        if (!email.trim()) {
            erreurs.email = 'Please enter a e-mail.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            erreurs.email = 'Please enter a valid email address.';
        }
        if (!message.trim()) {
            erreurs.message = 'Please enter a message.';
        }
        setErreurs(erreurs);

        if (Object.keys(erreurs).length === 0) {
            console.log('Nom :', fullName);
            console.log('Email :', email);
            console.log('Email :', object);
            console.log('Message :', message);
            const res = await axios.post('http://37.44.247.45:8000/send-email', { fullName, email, message, object });
            if (res.status === 200) {
                setFullName('');
                setEmail('');
                setMessage('');
                setObject('');
            }
        }
    }
    return (
        <div className={styles.formContent}>
            <span className={styles.fTitle}>Contact Us</span>
            <span className={styles.fText}>Your email address will not be published. Required fields are marked * </span>
            <div className={styles.fInputgroup}>
                <div className={styles.intErr}>
                    <ItemInput label={'Your Name *'} value={fullName} onChange={setFullName} />
                    {erreurs.fullName && <p className='p'>{erreurs.fullName}</p>}
                </div>
                <div className={styles.intErr}>
                    <ItemInput label={'Your Email *'} value={email} onChange={setEmail} />
                    {erreurs.email && <p className='p'>{erreurs.email}</p>}
                </div>
            </div>
            <ItemInput label={'Your Subject *'} value={object} onChange={setObject} />
            {erreurs.object && <p className='p'>{erreurs.object}</p>}
            <div className={styles.itemInput}>
                <span>Message *</span>
                <textarea className={styles.textarea} name="" id="" cols="30" rows="5" value={message} onChange={(event) => setMessage(event.target.value)}>
                </textarea>
                {erreurs.email && <p className='p'>{erreurs.email}</p>}
            </div>
            <div className={styles.cBtn} onClick={(e) => handleSubmit(e)}>
                <div className={styles.fBtn}>make an appointment</div>
            </div>
        </div>
    )
}
export default ContactForm
