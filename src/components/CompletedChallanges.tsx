import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/componontes/CompletedChallanges.module.css";

export function CompletedChallanges() {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}
