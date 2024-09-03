// components/Sidebar.tsx

'use client'; // Mark this component as a Client Component

import { useState } from 'react';
import styles from './Sidebar.module.css';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Implement logout functionality here
    alert('Logging out...');
    router.push('/login'); // Redirect to login page after logout
  };

  return (
    <div className={styles.sidebarContainer}>
      <button className={styles.menuButton} onClick={() => setIsVisible(!isVisible)}>
        ☰ Menu
      </button>
      {isVisible && (
        <div className={styles.sidebar}>
          <button className={styles.menuItem} onClick={() => router.push('/')}>
            Home
          </button>
          <button className={styles.menuItem} onClick={() => router.push('/profile')}>
            Profile
          </button>
          <button className={styles.menuItem} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
