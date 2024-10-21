"use client"

import { useState, useEffect } from "react";
import styles from "./assembly.module.css";
import Image from "next/image";

import doraImg1 from "@/public/dora/1.png";
import doraImg2 from "@/public/dora/2.png";
import doraImg3 from "@/public/dora/3.png";
import doraImg4 from "@/public/dora/4.png";
import doraImg5 from "@/public/dora/5.png";
import doraImg6 from "@/public/dora/6.png";
import doraImg7 from "@/public/dora/7.png";
import doraImg8 from "@/public/dora/8.png";
import doraImg9 from "@/public/dora/9.png";

import maybe_baybeImg1 from "@/public/maybe_baybe/1.png";
import maybe_baybeImg2 from "@/public/maybe_baybe/2.png";
import maybe_baybeImg3 from "@/public/maybe_baybe/3.png";
import maybe_baybeImg4 from "@/public/maybe_baybe/4.png";
import maybe_baybeImg5 from "@/public/maybe_baybe/5.png";
import maybe_baybeImg6 from "@/public/maybe_baybe/6.png";
import maybe_baybeImg7 from "@/public/maybe_baybe/7.png";
import maybe_baybeImg8 from "@/public/maybe_baybe/8.png";
import maybe_baybeImg9 from "@/public/maybe_baybe/9.png";

import serega_piratImg1 from "@/public/serega_pirat/1.png";
import serega_piratImg2 from "@/public/serega_pirat/2.png";
import serega_piratImg3 from "@/public/serega_pirat/3.png";
import serega_piratImg4 from "@/public/serega_pirat/4.png";
import serega_piratImg5 from "@/public/serega_pirat/5.png";
import serega_piratImg6 from "@/public/serega_pirat/6.png";
import serega_piratImg7 from "@/public/serega_pirat/7.png";
import serega_piratImg8 from "@/public/serega_pirat/8.png";
import serega_piratImg9 from "@/public/serega_pirat/9.png";

export default function assembly() {
    const [level, setLevel] = useState("Дора");
    const [inGame, setInGame] = useState(false);
    const [imgsGameRow1, setImgsGameRow1] = useState([]);
    const [imgsGameRow2, setImgsGameRow2] = useState([]);
    const [imgsGameRow3, setImgsGameRow3] = useState([]);
    const options = ["Дора", "Мейби Бейби", "Серега Пират"];

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    }

    const startGame = () => {
        let numberOfRepeat = 0;
        setInGame(true);

        const spinning = setInterval(() => {
            setImgsGameRow1(shuffle([...imgsGameRow1]));
            setImgsGameRow2(shuffle([...imgsGameRow2]));
            setImgsGameRow3(shuffle([...imgsGameRow3]));
            numberOfRepeat++;

            if (numberOfRepeat == 5) {
                clearInterval(spinning);
            }
        }, 100);
        setInGame(false);
    }

    const handleChange = (e) => {
        const level = e.target.value;
        setLevel(level);
    }

    useEffect(() => {
        switch (level) {
            case "Дора":
                setImgsGameRow1([doraImg1, doraImg2, doraImg3]);
                setImgsGameRow2([doraImg4, doraImg5, doraImg6]);
                setImgsGameRow3([doraImg7, doraImg8, doraImg9]);
                break;
            case "Мейби Бейби":
                setImgsGameRow1([maybe_baybeImg1, maybe_baybeImg2, maybe_baybeImg3]);
                setImgsGameRow2([maybe_baybeImg4, maybe_baybeImg5, maybe_baybeImg6]);
                setImgsGameRow3([maybe_baybeImg7, maybe_baybeImg8, maybe_baybeImg9]);
                break;
            case "Серега Пират":
                setImgsGameRow1([serega_piratImg1, serega_piratImg2, serega_piratImg3]);
                setImgsGameRow2([serega_piratImg4, serega_piratImg5, serega_piratImg6]);
                setImgsGameRow3([serega_piratImg7, serega_piratImg8, serega_piratImg9]);
                break;
        }
    }, [, level])

    return (
        <main className={styles.dora_assemblyPage}>
            <h2>
                <span>Сборка</span>
                <span>
                    <select name="level" onChange={handleChange}>
                        {options.map((option, index) =>  
                            <option key={index} value={option}>{option}</option>
                        )}
                    </select>
                </span>
            </h2>
            <div className={styles.gameField}>
                {imgsGameRow1.map((img, index) => (
                    <Image key={index} src={img} alt={index} width={180} height={180} priority />
                ))}
                {imgsGameRow2.map((img, index) => (
                    <Image key={index} src={img} alt={index} width={180} height={180} priority />
                ))}
                {imgsGameRow3.map((img, index) => (
                    <Image key={index} src={img} alt={index} width={180} height={180} priority />
                ))}
                {inGame ? 
                <button onClick={startGame} className={styles.startGameButton} disabled>Кнопка</button> 
                : 
                <button onClick={startGame} className={styles.startGameButton}>Кнопка</button>
                }
            </div>
        </main>
    )
}