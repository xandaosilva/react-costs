import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./css/ProjectForm.module.css";

export default function ProjectForm({ btnText }){

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application-json"
            }
        })
        .then((response) => response.json())
        .then((data) => setCategories(data))
        .catch((error) => console.log(error));
    }, []);

    return(
        <form className={styles.form}>
            <Input type="text" text="Project's name" name="name" placeholder="Project's name"/>
            <Input type="number" text="Project's total budget" name="budget" placeholder="Project's total budget" />
            <Select text="Select the category" name="category_id" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    );
}