import { useState, useEffect, Fragment, useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/componontes/Countdown.module.css";

export function Countdown() {
    const {
        minutes,
        seconds,
        isActive,
        resetCountdown,
        startCountdown,
        hasFinished } = useContext(CountdownContext);

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
