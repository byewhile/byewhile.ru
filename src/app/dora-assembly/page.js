"use client"

import { useState } from "react";
import styles from "./dora_assembly.module.css";
import Image from "next/image";

import doraImg1 from "@/public/1.png";
import doraImg2 from "@/public/2.png";
import doraImg3 from "@/public/3.png";
import doraImg4 from "@/public/4.png";
import doraImg5 from "@/public/5.png";
import doraImg6 from "@/public/6.png";
import doraImg7 from "@/public/7.png";
import doraImg8 from "@/public/8.png";
import doraImg9 from "@/public/9.png";

export default function dora_assembly() {
    const [imgsInGameRow1, setImgsInGameRow1] = useState([doraImg1, doraImg2, doraImg3]);
    const [imgsInGameRow2, setImgsInGameRow2] = useState([doraImg4, doraImg5, doraImg6]);
    const [imgsInGameRow3, setImgsInGameRow3] = useState([doraImg7, doraImg8, doraImg9]);
    const [inGame, setInGame] = useState(false);

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const startGame = () => {
        let numberOfRepeat = 0;
        setInGame(true);

        const spinning = setInterval(() => {
            setImgsInGameRow1(shuffle([...imgsInGameRow1]));
            setImgsInGameRow2(shuffle([...imgsInGameRow2]));
            setImgsInGameRow3(shuffle([...imgsInGameRow3]));
            numberOfRepeat++;

            if (numberOfRepeat == 5) {
                setInGame(false);
                clearInterval(spinning);
            }
        }, 100);
    }

    return (
        <main className={styles.dora_assemblyPage}>
            <h2>Сборка Доры</h2>

            <div className={styles.gameField}>
                {imgsInGameRow1.map((img, index) => (
                    <Image key={index} src={img} alt={index} priority />
                ))}
                {imgsInGameRow2.map((img, index) => (
                    <Image key={index} src={img} alt={index} priority />
                ))}
                {imgsInGameRow3.map((img, index) => (
                    <Image key={index} src={img} alt={index} priority />
                ))}
                {inGame ? 
                <button onClick={startGame} disabled>Кнопка</button> 
                : 
                <button onClick={startGame}>Кнопка</button>
                }
            </div>
        </main>
  )
}