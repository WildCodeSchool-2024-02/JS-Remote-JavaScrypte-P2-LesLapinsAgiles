import styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div className={styles.contactMain}>
      <h1 className={styles.contactTitle}>Suivez-nous</h1>

      <h2 className={styles.contactSubtitle}>
        Restez connecté avec LibrArt, en nous suivant sur nos réseaux sociaux!
      </h2>

      <div className={styles.contactParagraph}>
        Rejoignez notre communauté passionnée d'art, et partagez avec nous votre
        amour pour la culture. Suivez-nous sur Facebook, Instagram, Twitter pour
        ne manquer aucune actualité. Nous sommes également disponible par mail,
        pour répondre à toutes vos questions.
      </div>

      <div className={styles.reseaux}>
        <div className={styles.facebook}>
          <img
            className={styles.facebookImage}
            src="../src/assets/images/Facebook.png"
            alt="logo facebook"
          />
          <p className={styles.socialNetwork}>facebook@librArt</p>
        </div>

        <div className={styles.instagram}>
          <img
            className={styles.instagramImage}
            src="../src/assets/images/Instagram.png"
            alt="logo instagram"
          />
          <p className={styles.socialNetwork}>instagram@librArt</p>
        </div>

        <div className={styles.twitter}>
          <img
            className={styles.twitterImage}
            src="../src/assets/images/Twitter.png"
            alt="logo twitter"
          />
          <p className={styles.socialNetwork}>twitter@librArt</p>
        </div>

        <div className={styles.mail}>
          <img
            className={styles.mailImage}
            src="../src/assets/images/Email.png"
            alt="logo mail"
          />
          <p className={styles.socialNetwork}>contact@librArt</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
