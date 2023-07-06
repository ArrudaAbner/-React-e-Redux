import styles from"../styles/Estiloso.module.css"
import Link from "next/link";

export default function Estiloso() {
    return(
        <div className={styles.roxo}>
            <a href="/">Voltar</a>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
    )
}
