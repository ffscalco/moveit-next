import { useState, useEffect, Fragment, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/componontes/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;
let initialTime = 0.1 * 60;

export function Countdown() {
    const { startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(initialTime);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(initialTime);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            console.log("finished");
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            { hasFinished ? (
                <button
                    disabled
                    className={styles.countDownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                    <>
                        { isActive ? (
                            <button type="button"
                                className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                                onClick={resetCountdown}>
                                Abandonar Ciclo
                            </button>
                        ) : (
                                <button type="button"
                                    className={styles.countDownButton}
                                    onClick={startCountdown}>
                                    Iniciar um Ciclo
                                </button>
                            )}
                    </>
                )}
        </div>
    );
}
