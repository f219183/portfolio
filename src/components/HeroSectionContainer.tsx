import { FunctionComponent, useCallback } from "react";
import styles from "./HeroSectionContainer.module.css";

const HeroSectionContainer: FunctionComponent = () => {
  const onAboutMeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutMe']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOpenSourceContributionsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCertificationsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='divContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='skills']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='sectionProjects']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.aboutMe}>
        <div className={styles.openSourceContribsCertifica}>
          <b className={styles.rehanTariq}>Rehan Tariq</b>
          <b
            className={styles.frontEndWebDeveloper}
          >{`Front-end Web Developer & Web Designer`}</b>
        </div>
        <img
          className={styles.frameDivDoronOpenSourceCo}
          loading="lazy"
          alt=""
          src="/frame-427318912.svg"
        />
        <div className={styles.frameGithubContributedToGo}>
          <div className={styles.foundationOfCyberSecurity}>
            <div className={styles.aboutMe1} onClick={onAboutMeTextClick}>
              About Me
            </div>
            <div
              className={styles.openSourceContributions}
              onClick={onOpenSourceContributionsClick}
            >
              Open Source Contributions
            </div>
            <div
              className={styles.certifications}
              onClick={onCertificationsTextClick}
            >
              Certifications
            </div>
            <div className={styles.skills} onClick={onSkillsTextClick}>
              Skills
            </div>
            <div className={styles.projects} onClick={onProjectsTextClick}>
              Projects
            </div>
          </div>
          <div className={styles.aboutMeOpenSourceContribs}>
            <div className={styles.rehanstudio323gmailcom}>
              rehanstudio323@gmail.com
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.downIcon}
        loading="lazy"
        alt=""
        src="/down-icon.svg"
      />
    </section>
  );
};

export default HeroSectionContainer;
