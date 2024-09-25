import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const pages = [
    {
      title: "😂 Найди emoji 😭",
      url: "/find-emoji",
    },
    {
      title: "👀 Сборка Доры 👄",
      url: "/dora-assembly",
    },
  ];

  return (
    <main className={styles.homePage}>
      {pages.map(page => (
        <Link key={page.url} href={page.url}>
            <div className={styles.gameBlock}>
                <span className={styles.gameTitle}>{page.title}</span>
            </div>
        </Link>
      ))}
    </main>
  );
}
