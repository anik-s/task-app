import React, { useState, useEffect } from 'react';
// import { BASE_URL } from '../../../App';
import BlackHeader from '../../../components/black_header_pages/BlackHeader';
import ContactForm from '../../../components/contactForm/ContactForm';
import '../../teams/Teams.module.css';
// import axios from 'axios';
import { teamsData } from '@/components/list_team/teamData';
import styles from '../../teams/Teams.module.css';
import Image from 'next/image';
import {useRouter} from "next/router";


const getPerson = (id) => {
    for (let i = 0; i <teamsData.length; i++) {
        if (teamsData[i].id == id) {
            return teamsData[i];
        }
    }
};

const Index = () => {
    const router = useRouter();
    const personId = router.query.id;
    const [person, setPerson] = useState(null);

    useEffect((() => {
        setPerson(getPerson(personId));
    }), [personId]);

    return (
        <div className={styles.dtTeam}>
            <BlackHeader pageName={"Team details"} backPage={"Team Details"} />
            <div className={styles.infosContents}>
                <Image src={person?.image} alt="" className='' />
                <div className={styles.dtUser}>
                    <span className={`${styles.name} ${styles.name2}`}>{person?.fullNAme}</span>
                    <span className={styles.post}>{person?.responsability}</span>
                    {/* <br />
                    <div>
                        <span className='name dt-title'>Responsibility: </span>
                        <span className='post'>Lead dev</span>
                    </div> */}
                    <br />
                    <div>
                        <span className={`${styles.name} ${styles.dtTitle}`}>Experience: </span>
                        <span className={styles.post}>{person?.yearsExperience}</span>
                    </div>
                    <br />
                    <div>
                        <span className={`${styles.name} ${styles.dtTitle}`}>Email : </span>
                        <span className={styles.post}>{person?.email}</span>
                    </div>
                    <br />
                    <div>
                        <span className={`${styles.name} ${styles.dtTitle}`}>Phone: </span>
                        <span className={styles.post}>{person?.phone}</span>
                    </div>
                </div>
            </div>
            <div className={styles.otherContent}>
                <span className={`${styles.textLPara} ${styles.pEx}`}>
                    Personal experience
                </span>
                <span className={styles.textTeamDesc}>
                    {person?.descExperience}
                </span>
            </div>
            <ContactForm />

        </div>
    )
}

export default Index