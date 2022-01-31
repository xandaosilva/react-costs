import styles from "./css/Select.module.css";

export default function Select({ text, name, options, handleOnChange, value }){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Select the options</option>
            </select>
        </div>
    );
}