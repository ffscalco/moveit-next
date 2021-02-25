import styles from "../styles/componontes/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ffscalco.png" alt="Fabiano Fagundes Scalco" />
            <div>
                <strong>Fabiano Fagundes Scalco</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}
