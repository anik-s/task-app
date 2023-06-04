import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from "./listteam.module.css";

const TeamItem = ({ img, fullName, id, role }) => {
    const router = useRouter();
    return (
        <div className={styles.tItem}>
            <Image src={img} alt="" />
            <span className={styles.name}>{fullName}</span>
            <span className={styles.post}>{role}</span>
            <div className={styles.viewdetailbtn} onClick={() => { router.push(`/details-team/${id}`); }}>View Details</div>
        </div>
    )
}

export default TeamItem
