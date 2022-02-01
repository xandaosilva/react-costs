import { useHistory } from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./css/NewProject.module.css";

export default function NewProject(){

    const history = useHistory();

    function createPost(project){
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify(project),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            history.push("/projects", { message: "Project created" });
        })
        .catch((error) => console.log(error));
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create your projects to add services later</p>
            <ProjectForm handleSubmit={createPost} btnText="Create project"/>
        </div>
    );
}