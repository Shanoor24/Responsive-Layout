import React from 'react';
import styles from './ResponsiveLayout.module.css';

const ResponsiveLayout = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Header</header>
      <nav className={styles.nav}>Navigation</nav>
      <main className={styles.main}>
        <section className={styles.section}>Content</section>
        <aside className={styles.sidebar}>Sidebar</aside>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default ResponsiveLayout;
