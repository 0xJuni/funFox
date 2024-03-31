import styles from "../page.module.css";

const Week1 = (props) => {
  const { setNextstep ,nextStep } = props;
  return (
    <div className={styles.main}>
      <div className={styles.main_image}>
        <div>
          <img className={styles.container} src={"/images/background.png"} />
        </div>
        <div className={styles.openBook}>
          <img src={"/images/book.png"} />
        </div>
        <div className={styles.logo}>
          <img src={"/images/funfox_logo.png"} />
        </div>
        <div className={styles.tag}>
          <img src={"/images/tag.png"} />
        </div>
        <div className={styles.pencil}>
          <img src={"/images/pencil.png"} />
        </div>
        <div className={styles.bag}>
          <img src={"/images/bag.png"} />
        </div>
        <div className={styles.scale}>
          <img src={"/images/scale.png"} />
        </div>
        <div className={styles.closeBook}>
          <img src={"/images/close_book.png"} />
        </div>
        <div className={styles.hat}>
          <img src={"/images/hat.png"} />
        </div>

        <div className={styles.title__main}>
          {" "}
          <img src={"/images/Rectangle_pink.png"} />
          <h1>Elements of Story Writing</h1>
        </div>

        <div className={styles.hero_sectionText}>
          <h5>
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </h5>
        </div>

        <div className={styles.blueBackgroundImg}>
          <img src={"/images/Rectangle_blue.png"} />
          <h5>
            There are elements which make the foundation for story writing. An
            element is an essential part of something and every fiction story
            has the same key elements:
          </h5>
          <img className={styles.studentImg} src={"/images/student.png"} />
        </div>

        <div className={styles.cloudMain}>
          <div>
            <img src={"/images/cloud1.png"} />
          </div>
          <div>
            <img src={"/images/cloud2.png"} />
          </div>
          <div>
            <img src={"/images/cloud3.png"} />
          </div>
          <div>
            <img src={"/images/cloud4.png"} />
          </div>
          <div>
            <img src={"/images/cloud5.png"} />
          </div>
        </div>
        <div className={styles.cloudText}>
          <p>
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </p>
        </div>

        <div className={styles.lessonContainer}>
          <img src={"/images/Pink_rectangle.png"} />
          <p>
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories.
            <br />
            The setting is an important element of every fiction story.
          </p>
        </div>

        <div className={styles.footer}>
          <img className={styles.personIcon} src={"/images/personIcon.png"} />
          <img
          style={{cursor:nextStep?"pointer":"not-allowed"}}
            className={styles.previousArrow}
            src={"/images/PreviousArrow.png"}
          />
          <img
            className={styles.pageNumering}
            src={"/images/PageNumbering.png"}
          />
          <img style={{cursor:!nextStep?"pointer":"not-allowed"}} className={styles.nextArrow} src={"/images/NextArrow.png"} onClick={()=>{setNextstep(true)}}/>
          <img className={styles.HelpIcon} src={"/images/HelpIcon.png"} />
        </div>
      </div>
    </div>
  );
};

export default Week1;
