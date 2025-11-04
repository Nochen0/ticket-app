import useAuth from "../../hooks/useAuth"
import styles from "./bookings.module.css"

export default function BookingsPage() {
  useAuth()

  return (
    <div style={{ width: "calc(100vw - 290px)" }} class={styles.container}>
      <h2 class={styles.h2}>Bookings</h2>
      <div class={styles.bookings}>
        <div class={styles["bookings-control"]}>
          <h3 class={styles.h3}>List of bookings</h3>
          <button class={styles.button}>Add booking</button>
        </div>
        <div class={styles["filter-sort"]}>
          <div class={styles.filter}>
            <input
              type="search"
              placeholder="Search for promoter"
              class={styles.search}
            />
            <button class={styles["other-filters"]}>Other filters...</button>
          </div>
          <div class={styles.sort}>
            <p>Order by</p>
            <select class={styles["other-filters"]}>
              <option value="createdAt">Creation date</option>
              <option value="name">Name</option>
              <option value="email">Email</option>
            </select>
            <svg
              class={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
