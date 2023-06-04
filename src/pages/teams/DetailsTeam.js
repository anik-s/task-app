import React, { useState, useEffect } from 'react';
// import { BASE_URL } from '../../../App';
import BlackHeader from '../../components/black_header_pages/BlackHeader';
import ContactForm from '../../components/contactForm/ContactForm';
import './Teams.module.css';
// import axios from 'axios';
import { useParams } from "react-router-dom";
import { teamsData } from '../../components/list_team/teamData';
import styles from './Teams.module.css';

const DetailsTeam = () => {
    const params = useParams();


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className={styles.dtTeam}>
            <BlackHeader pageName={"Team details"} backPage={"Team Details"} />
            <div className={styles.infosContents}>
                <img src={teamsData[params.id].imege} alt="" className='' />
                <div className={styles.dtUser}>
                    <span className={`${styles.name} ${styles.name2}`}>{teamsData[params.id].fullNAme}</span>
                    <span className={styles.post}>{teamsData[params.id].responsability}</span>
                    {/* <br />
                    <div>
                        <span className='name dt-title'>Responsibility: </span>
                        <span className='post'>Lead dev</span>
                    </div> */}
                    <br />
                    <div>
                        <span className={`${styles.name} ${styles.dtTitle}`}>Experience: </span>
                        <span className={styles.post}>{teamsData[params.id].yearsExperience}</span>
                    </div>
                    <br />
                    <div>
                        <span className={`${styles.name} ${styles.dtTitle}`}>Email : </span>
                        <span className={styles.post}>{teamsData[params.id].email}</span>
                    </div>
                    <br />
                    <div>
                        <span className={`${styles.name} ${styles.dtTitle}`}>Phone: </span>
                        <span className={styles.post}>{teamsData[params.id].phone}</span>
                    </div>
                </div>
            </div>
            <div className={styles.otherContent}>
                <span className={`${styles.textLPara} ${styles.pEx}`}>
                    Personal experience
                </span>
                <span className={styles.textTeamDesc}>
                    {teamsData[params.id].descExperience}
                </span>
            </div>
            <ContactForm />

        </div>
    )
}

export default DetailsTeam