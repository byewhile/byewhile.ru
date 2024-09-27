"use client"

import { useEffect, useState } from "react";
import styles from "./not_found.module.css";

export default function not_found() {
    const [warning, setWarning] = useState("Возвращайтесь немедленно!");
    const warnings = ["Возвращайтесь немедленно!", "Return immediately!", "¡Vuelve inmediatamente!", "Volte imediatamente!", "Komm sofort wieder!", "Revenez immédiatement!", "赶紧回来吧!", "すぐに戻ってきてください!", "즉시 돌아오세요!", "أعود على الفور!"];

    useEffect(() => {
        setTimeout(() => {
            let index = warnings.indexOf(warning);
            if (index == 9) index = -1
            setWarning(warnings[index + 1]);
        }, 500)
    }, [, warning])

    return (
        <main className={styles.not_foundPage}>
            <h2>404</h2>
            <p>{warning}</p>
        </main>
    )
}