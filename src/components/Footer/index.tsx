import styles from './Footer.module.scss';
import {ReactComponent as FooterImage } from 'assets/logo.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <FooterImage />
        </footer>
    );
}