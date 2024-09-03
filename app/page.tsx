import Image from "next/image";
// pages/index.tsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Component */}
      <Sidebar />
      
      {/* Main Content */}
      <div style={{ marginLeft: '250px', flex: 1, position: 'relative', minHeight: '100vh', paddingBottom: '60px' }}>
        <Header />
        {/* Your main content goes here */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
