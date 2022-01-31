import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./css/ProjectForm.module.css";

export default function ProjectForm({ btnText }){
    return(
        <form className={styles.form}>
            <Input type="text" text="Project's name" name="name" placeholder="Project's name"/>
            <Input type="number" text="Project's total budget" name="budget" placeholder="Project's total budget" />
            <Select text="Select the category" name="category_id"/>
            <SubmitButton text={btnText}/>
        </form>
    );
}