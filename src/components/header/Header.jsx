import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
        <h1>
          <Link href="/">
            <Image src="/favicon.ico" width="32" height="32" alt="icon" />
            byewhile
          </Link>
        </h1>
    </header>
  )
}