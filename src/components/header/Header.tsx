import Logout from "../logout/Logout"
import styles from "./header.module.css"

export default function Header() {
  return (
    <div class={styles.header}>
      <img
        src="https://booking.funawayevents.com/_next/image?url=%2Ftext-saranda.png&w=256&q=75"
        alt="Logo"
        class={styles.logo}
      />
      <Logout />
    </div>
  )
}
