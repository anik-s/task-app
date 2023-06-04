import React from 'react';
import { SiFlutter, SiDjango, SiKubernetes, SiDocker, SiAmazonaws, SiNginx, SiJenkins, SiJira, SiGoogletagmanager } from 'react-icons/si';
import { FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { AiFillGithub, AiOutlineGitlab } from 'react-icons/ai';
import { DiJava, DiJavascript1 } from 'react-icons/di';
//import { useSelector } from 'react-redux';
import styles from './Technologies.module.css';

const technos = [
    {
        icon: (<DiJava />),
        title: 'Java',
        cate: '#-Développement Mobile'
    },
    {
        icon: (<DiJavascript1 />),
        title: 'JavaScript',
        cate: '#-Développement Mobile'
    },
    {
        icon: (<SiFlutter />),
        title: 'Flutter',
        cate: '#-Développement Mobile'
    },
    {
        icon: (<FaReact />),
        title: 'React JS',
        cate: '#-Développement Web'
    },
    {
        icon: (<FaNodeJs />),
        title: 'Node JS',
        cate: '#-Développement Web'
    },
    {
        icon: (<SiDjango />),
        title: 'Django',
        cate: '#-Développement Web'
    },
    {
        icon: (<FaLaravel />),
        title: 'Laravel',
        cate: '#-Développement Web'
    },
    {
        icon: (<SiKubernetes />),
        title: 'Kubernetes',
        cate: '#-Infra'
    },
    {
        icon: (<SiDocker />),
        title: 'Docker',
        cate: '#-Infra'
    },
    {
        icon: (<SiAmazonaws />),
        title: 'AWS Services',
        cate: '#-Infra'
    },
    {
        icon: (<SiNginx />),
        title: 'Nginx',
        cate: '#-Infra'
    },
    {
        icon: (<SiJenkins />),
        title: 'Jenkins',
        cate: '#-Infra'
    },
    {
        icon: (<SiGoogletagmanager />),
        title: 'Scrum Agile',
        cate: '#-Management'
    },
    {
        icon: (<SiJira />),
        title: 'Jira',
        cate: '#-Management'
    },
    {
        icon: (<AiFillGithub />),
        title: 'Github',
        cate: '#-Versionning'
    },
    {
        icon: (<AiOutlineGitlab />),
        title: 'Gitlab',
        cate: '#-Versionning'
    },
];
const Technologies = () => {
    const langue = 1;
    return (
        <div className={styles.technos}>
            <div className={styles.pagesTechs}>
                <h4 className={styles.h4}>RECENT TECHNOLOGIES</h4>
                <h1 className={styles.h1}>the technologies we use to achieve our digital solutions</h1>
                <div className={`${styles.listTechnos}`}>
                    {
                        technos.map((tech, i) =>
                            <div key={i} className={styles.itemTechno}>
                                {tech.icon}
                                <div className={styles.textItemTechno}>
                                    <span>{tech.title}</span>
                                    <small>{tech.cate}</small>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default Technologies