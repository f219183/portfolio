import { FunctionComponent } from "react";
import styles from "./TechToolboxContainer.module.css";

const TechToolboxContainer: FunctionComponent = () => {
  return (
    <section className={styles.skills} data-scroll-to="skills">
      <div className={styles.frameLanguages}>
        <div className={styles.frameProficientIn}>
          <h3 className={styles.techToolbox}>🛠️ Tech Toolbox:</h3>
          <div className={styles.frontendFrameworks}>
            <div className={styles.frontendFrameworksProficienContainer}>
              <b>Frontend Frameworks:</b>
              <span>{` Proficient in NEXT.js & React.js.`}</span>
            </div>
            <div className={styles.designToolsProficientContainer}>
              <b>Design Tools:</b>
              <span>
                {" "}
                Proficient in Photoshop, Figma, Illustrator, Canva, Affinity
                Designer.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameMyPreferred}>
        <div className={styles.frameVersionControl}>
          <div className={styles.frameCodeEditing}>
            <h1 className={styles.languages}>Languages</h1>
          </div>
          <img
            className={styles.frameImageIcon}
            loading="lazy"
            alt=""
            src="/frame-427318917.svg"
          />
          <div className={styles.frameCodeEditing1}>
            <div className={styles.myMostFavorite}>
              My most favorite languages for backend development is Golang, for
              some tasks i also use python.
            </div>
          </div>
          <div className={styles.frameCodeEditing2}>
            <h1 className={styles.frontEnd}>Front-end</h1>
          </div>
          <div className={styles.frameRectangle}>
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
            <img
              className={styles.image4Icon}
              loading="lazy"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className={styles.image5Icon}
              loading="lazy"
              alt=""
              src="/image-5@2x.png"
            />
            <img
              className={styles.image6Icon}
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
            <img
              className={styles.image7Icon}
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
          <div className={styles.frameCodeEditing3}>
            <div className={styles.myPreferredTechnologies}>
              My preferred technologies for back-end web programming and
              database architecture.
            </div>
          </div>
          <div className={styles.frameTools}>
            <div className={styles.skillsSectionTitle}>
              <h1 className={styles.tools}>Tools</h1>
            </div>
            <img
              className={styles.versionControlTools}
              loading="lazy"
              alt=""
              src="/frame-427318925.svg"
            />
            <div className={styles.myFavoriteToolsForVersionWrapper}>
              <div className={styles.myFavoriteTools}>
                My favorite tools for version control, code editing, and
                container orchestration.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechToolboxContainer;
