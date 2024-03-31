import styles from '../page.module.css'


const Week2 = (props)=>{
  const { setNextstep ,nextStep } = props;

    return(
        <div className={styles.main}>
      <div className={styles.main_image}>
        <div>
          <img className={styles.container} src={'/images/background.png'} />
        </div>
        <div className={styles.openBook}>
          <img src={'/images/book.png'} />
        </div>
        <div className={styles.logo}>
          <img src={'/images/funfox_logo.png'} />
        </div>
        <div className={styles.tag}>
          <img src={'/images/tag.png'} />
        </div>
        <div className={styles.pencil}>
          <img src={'/images/pencil.png'} />
        </div>
        <div className={styles.bag}>
          <img src={'/images/bag.png'} />
        </div>
        <div className={styles.scale}>
          <img src={'/images/scale.png'} />
        </div>
        <div className={styles.closeBook}>
          <img src={'/images/close_book.png'} />
        </div>
        <div className={styles.hat}>
          <img src={'/images/hat.png'} />
        </div>

     

        <div className={styles.hero_sectionText}>
          <h5>
          Can you figure out the definition of setting from the following examples?


          </h5>
        </div>

        <div className={styles.blueBackgroundImg}>
          <img src={'/images/Rectangle_blue.png'} />
          <h5>
          Setting is the time      and place     of a story. It often answers the questions: when? and where?
          </h5>
          <img className={styles.studentImg} src={'/images/student.png'} />
        </div>

        <div className={styles.cloudMain}>
          <div>
            <img src={'/images/cloud1.png'} />
          </div>
          <div>
            <img src={'/images/cloud2.png'} />
          </div>
          <div>
            <img src={'/images/cloud3.png'} />
          </div>
          <div>
            <img src={'/images/cloud4.png'} />
          </div>
          <div>
            <img src={'/images/cloud5.png'} />
          </div>
        </div>
        <div className={styles.cloudText}>
          <p>
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </p>
        </div>

        <div className={styles.lessonContainer}>
          <img src={'/images/Pink_rectangle.png'} />
          <p>
            For today’s lesson, we will try to understand and practice writing
            the setting for our stories.
            <br />
            The setting is an important element of every fiction story.
          </p>
        </div>

        <div className={styles.footer}>
        <img className={styles.personIcon} src={'/images/personIcon.png'} />
        <img style={{cursor:nextStep?"pointer":"not-allowed"}} className={styles.previousArrow} src={'/images/PreviousArrow.png'} onClick={()=>{setNextstep(false)}}/>
        <img className={styles.pageNumering} src={'/images/PageNumbering2.png'} />
        <img style={{cursor:!nextStep?"pointer":"not-allowed"}} className={styles.nextArrow} src={'/images/NextArrow.png'} />
        <img className={styles.HelpIcon} src={'/images/HelpIcon.png'} />
        </div>
      </div>
    </div>
    )
}

export default Week2
