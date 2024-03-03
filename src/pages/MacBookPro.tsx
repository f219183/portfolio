import { FunctionComponent, useCallback } from "react";
import HeroSectionContainer from "../components/HeroSectionContainer";
import TechToolboxContainer from "../components/TechToolboxContainer";
import FeaturedProjectsContainer from "../components/FeaturedProjectsContainer";
import styles from "./MacBookPro.module.css";

const MacBookPro: FunctionComponent = () => {
  const onFoundationOfCyberClick = useCallback(() => {
    window.open("https://coursera.org/share/916eaeb3d45c93e5ede6717538616d65");
  }, []);

  const onWhatIsDataClick = useCallback(() => {
    window.open("https://coursera.org/share/5571af06e034d655850356e139c3b253");
  }, []);

  return (
    <div className={styles.macbookPro}>
      <HeroSectionContainer />
      <section className={styles.aboutMe} data-scroll-to="aboutMe">
        <h1 className={styles.aboutMe1}>About Me</h1>
        <img
          className={styles.aboutMeFrame}
          loading="lazy"
          alt=""
          src="/frame-427318907@2x.png"
        />
        <h3 className={styles.passionateFrontEndDeveloper}>
          🚀 Passionate Front-End Developer | Web Designer | Security Enthusiast
          🚀
        </h3>
        <div className={styles.heyThere}>
          Hey there! 👋 I'm Rehan Tariq, a dedicated front-end developer with a
          proactive, can-do approach. Committed to driving team efficiency, I
          contribute innovative solutions and embrace continuous personal and
          collective growth. Excited to connect, collaborate, and explore new
          opportunities in the tech world! Let's make things happen together!
          🚀✨
        </div>
      </section>
      <div className={styles.heroSection}>
        <div className={styles.div} data-scroll-to="divContainer1">
          <h3 className={styles.openSourceContributions}>
            🌐 Open Source Contributions:
          </h3>
          <div className={styles.skills}>
            <div className={styles.githubContributedTo}>
              GitHub: Contributed to good first issues.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.heroSection1}>
        <div className={styles.div1} data-scroll-to="divContainer">
          <h3 className={styles.certifications}>📜 Certifications:</h3>
          <div className={styles.divInner}>
            <div className={styles.foundationOfCyberSecurityParent}>
              <div
                className={styles.foundationOfCyber}
                onClick={onFoundationOfCyberClick}
              >
                Foundation of Cyber Security
              </div>
              <div className={styles.whatIsData} onClick={onWhatIsDataClick}>
                What is Data Science?
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechToolboxContainer />
      <FeaturedProjectsContainer />
      <footer className={styles.footer}>
        <div className={styles.contactAtRehanstudio323gmai}>
          contact at rehanstudio323@gmail.com
        </div>
        <div className={styles.rehanTariq2024}>© Rehan Tariq, 2024</div>
      </footer>
    </div>
  );
};

export default MacBookPro;
