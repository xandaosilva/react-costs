import ProjectForm from "../project/ProjectForm";
import styles from "./css/NewProject.module.css";

export default function NewProject(){
    return(
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your projects to add services later</p>
            <ProjectForm btnText="Create project"/>
        </div>
    );
}