import React, { useState, useEffect } from 'react';
import styles from './listteam.module.css';
import TeamItem from './TeamItem';
import axios from 'axios';

import { teamsData } from './teamData';



const TeamList = ({ nbr, labele }) => {

    const [serteams, setserteams] = useState({ asError: false, data: [] });

    useEffect((() => {
        async function fetchAboutTeams() {
            var data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}about/`);
            console.log(data.data);
            setserteams(data.data);
        }
        fetchAboutTeams();
    }), []);

    return (
        <div className={styles.teamList}>
            <div className={styles.badgLPara}>
                <span className={styles.textBadgLPara}>our team</span>
            </div>
            <span className={styles.textLPara}>
                {labele}
            </span>
            <div className={styles.tList}>
                {
                    teamsData.map((item, i)=> (i<teamsData.length && <TeamItem key={item.id} id={item.id} img={item.image} role={item.responsability} fullName={item.fullNAme} />))
                }
                
                {/* <TeamItem id={1} img={rougui} fullName="Mm Rougui" />
                <TeamItem id={2} img={mamadou} fullName="Mr Mamadou" /> */}
            </div>
        </div>
    )
}

export default TeamList