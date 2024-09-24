import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
        <h1><Link href="/">byewhile</Link></h1>
    </header>
  )
}