// components/Header.tsx

import Image from 'next/image';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Site Logo */}
      <div className={styles.logoContainer}>
        <Image
          src="/logo.png" // Replace with your logo path
          alt="Site Logo"
          width={50}       // Adjust width and height as needed
          height={50}
          className={styles.logo}
        />
        <span className={styles.siteName}>My Site</span>
      </div>

      {/* Profile Section */}
      <div className={styles.profileContainer}>
        <Image
          src="/profile-pic.jpg" // Replace with the path to your profile picture
          alt="Profile"
          width={40}  // Adjust width and height as needed
          height={40}
          className={styles.profilePic}
        />
        <span className={styles.userName}>John Doe</span>
      </div>
    </header>
  );
};

export default Header;
