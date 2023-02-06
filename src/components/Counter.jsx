import styles from '../assets/CSS/Counter.module.css'

export default function Counter() {
  return (
    <section className={styles.counterSec}>
      <div className={styles.counter}>
        <div className={`${styles.counterItems} flex-wrap`}>
          <div className={styles.counterItem}>
            <h1>2730+</h1>
            <p>Completed Projects</p>
          </div>
          <div className="counter-item">
            <h1>39</h1>
            <p>Availble Country</p>
          </div>
          <div className="counter-item">
            <h1>125M</h1>
            <p>User Worldwide</p>
          </div>
          <div className="counter-item">
            <h1>12</h1>
            <p>Award Winner</p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  )
}
