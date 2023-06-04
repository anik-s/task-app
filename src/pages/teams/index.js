import React from 'react';
import BlackHeader from '../../components/black_header_pages/BlackHeader';
import TeamList from '../../components/list_team/TeamList';
import WhoAreWe from '../../components/whou_we_are/WhoAreWe';
import { teamsData } from '../../components/list_team/teamData';
import styles from './Teams.module.css';

const Index = () => {
  return (
    <div className='team-page'>
      <BlackHeader pageName={"Our team"} backPage={"Our Team"} />
      <WhoAreWe />
      <TeamList nbr={teamsData.length} labele={"Our dedicated team"} />
    </div>
  )
}

export default Index