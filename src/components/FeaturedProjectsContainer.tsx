import { FunctionComponent, useCallback } from "react";
import styles from "./FeaturedProjectsContainer.module.css";

const FeaturedProjectsContainer: FunctionComponent = () => {
  const onLinkProjectLinkContainerClick = useCallback(() => {
    window.open(
      "https://github.com/Reh1t/Online-store-using-Oracle-and-react-with-tailwind-"
    );
  }, []);

  const onLinkProjectLinkContainer2Click = useCallback(() => {
    window.open(
      "https://github.com/Reh1t/Online-store-using-Oracle-and-react-with-tailwind-"
    );
  }, []);

  const onCheckItOut1Click = useCallback(() => {
    window.open("https://github.com/Reh1t/Mini-operating-system-in-terminal");
  }, []);

  return (
    <section
      className={styles.sectionProjects}
      data-scroll-to="sectionProjects"
    >
      <div className={styles.featuredProjectsWrapper}>
        <h1 className={styles.featuredProjects}>Featured Projects</h1>
      </div>
      <div className={styles.featuredProjects1}>
        <h3 className={styles.ecommerceWebsite}>{`ECommerce Website `}</h3>
        <div className={styles.eCommerceWebsite}>
          <img
            className={styles.image2Icon}
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <img
            className={styles.image8Icon}
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <img
            className={styles.image9Icon}
            loading="lazy"
            alt=""
            src="/image-9@2x.png"
          />
          <div className={styles.image6Wrapper}>
            <img
              className={styles.image6Icon}
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
          </div>
        </div>
        <div className={styles.developedAnEcommerce}>
          Developed an Ecommerce website using react as frontend, node as
          backend and oracle as database .
        </div>
      </div>
      <div className={styles.linkProjectLinkWrapper}>
        <div
          className={styles.linkProjectLink}
          onClick={onLinkProjectLinkContainerClick}
        >
          <div className={styles.checkItOut}>Check it out!</div>
        </div>
      </div>
      <div className={styles.miniOperatingSystemInTermiParent}>
        <h3 className={styles.miniOperatingSystem}>
          Mini Operating System in terminal
        </h3>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className={styles.madeAnOperating}>
          Made an operating system that works in a linux. It is a terminal based
          system that runs all apps through menu based system.
        </div>
      </div>
      <div
        className={styles.linkProjectLink1}
        onClick={onLinkProjectLinkContainer2Click}
      >
        <div className={styles.checkItOut1} onClick={onCheckItOut1Click}>
          Check it out!
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsContainer;
