import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";

import find_emoji_bg from "@/public/find_emoji_bg.webp";
import assembly from "@/public/assembly.webp";

export default function Home() {
  const pages = [
    {
      title: "Найди emoji",
      url: "/find-emoji",
      bg: find_emoji_bg,
    },
    {
      title: "Сборка",
      url: "/assembly",
      bg: assembly,
    }
  ];

  return (
    <main className={styles.homePage}>
      {pages.map(page => (
        <Link key={page.url} href={page.url}>
            <div className={styles.gameBlock}>
                <Image src={page.bg} alt={page.title} />
                <span className={styles.gameTitle}>{page.title}</span>
            </div>
        </Link>
      ))}
    </main>
  );
}
