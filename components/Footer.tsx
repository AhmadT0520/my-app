// components/Footer.tsx

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>&copy; {new Date().getFullYear()} Government Graduate College of Science. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
