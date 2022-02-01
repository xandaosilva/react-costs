import { useEffect, useState } from "react";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./css/ProjectForm.module.css";

export default function ProjectForm({ handleSubmit, btnText, projectData }){

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

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

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value });
    }

    function handleCategory(e){
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }});
    }

    return(
        <form className={styles.form} onSubmit={submit}>
            <Input type="text" text="Project's name" name="name" placeholder="Project's name" handleOnChange={handleChange} value={project.name ? project.name : ""}/>
            <Input type="number" text="Project's total budget" name="budget" placeholder="Project's total budget" handleOnChange={handleChange} value={project.budget ? project.budget : ""}/>
            <Select text="Select the category" name="category_id" options={categories} handleOnChange={handleCategory} value={project.category ? project.category.id : ""}/>
            <SubmitButton text={btnText}/>
        </form>
    );
}