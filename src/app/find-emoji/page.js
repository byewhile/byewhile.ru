"use client"

import { useState, useEffect } from "react";
import styles from "./find_emoji.module.css";

export default function find_emoji() {
    const [level, setLevel] = useState(1);
    const [correctEmoji, setCorrectEmoji] = useState("");
    const [emojisInGame, setEmojisInGame] = useState([]);

    const levelUp = () => {
        setLevel(level + 1);
    }

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        let prepareEmojisInGame = ["😂", "🤣", "😥", "😢", "🙄", "🤤", "😭", "🥺", "👿", "🥰", "😉", "😊", "😘", "😲", "😀", "😈", "😠"];
        shuffle(prepareEmojisInGame);
        const prepareCorrectEmoji = prepareEmojisInGame.shift();

        for (let i = 0; i < level; i++) {
        prepareEmojisInGame = prepareEmojisInGame.concat(prepareEmojisInGame);
        }
        prepareEmojisInGame[0] = prepareCorrectEmoji;
        shuffle(prepareEmojisInGame);

        setCorrectEmoji(prepareCorrectEmoji);
        setEmojisInGame(prepareEmojisInGame);
    }, [, level])
  
  return (
    <main className={styles.find_emojiPage}>
        <h2><span>Найди: {correctEmoji}</span><span>Уровень: {level}</span></h2>
        <div className={styles.gameField}>
            {emojisInGame.map((emoji, index) => (
                <div key={index}>
                {correctEmoji == emoji ?
                    <span onClick={levelUp}>{emoji}</span>
                :
                    <span>{emoji}</span>}
                </div>
            ))}
      </div>
    </main>
  )
}