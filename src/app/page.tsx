import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>PORTFOLIO,<br/>
              Quentin Michon</h1>
          <p>
            Mon nouveau site web photo<br/>
            <a
              href="https://swisspotter.ch"
              //className={styles.primary}
              target="_blank"                   // indique d'ouvrir le lien dans un nouvel onglet
              rel="noopener noreferrer"         // mesures de sécurité pour les liens externes
            >
                swisspotter.ch
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
