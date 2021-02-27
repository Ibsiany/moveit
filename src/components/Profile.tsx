import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile(){
    const {level} =  useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ibsiany.png" alt="Ibsiany Dias" />
            <div>
                <strong>Ibsiany Dias</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}