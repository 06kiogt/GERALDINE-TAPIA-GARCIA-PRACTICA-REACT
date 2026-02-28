import styles from "./Datos.module.css";

function Datos({ texto, className }) {
    return (
        <div className={`${styles.datos} ${className}`}>
            {texto}
        </div>
    )
}

export default Datos;
