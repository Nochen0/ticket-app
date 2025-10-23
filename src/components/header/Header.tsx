import styles from "./header.module.css"

export default function Header() {
  return (
    <div class={styles.header}>
      <img src="src/assets/logo.png" alt="Logo" class={styles.logo} />
      <div>Logout</div>
    </div>
  )
}
