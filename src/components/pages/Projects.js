import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import Container from "../layout/Container";
import styles from "./css/Projects.module.css"
import LinkButton from "../layout/LinkButton";

export default function Projects(){

    const location = useLocation();
    let message = "";

    if(location.state){
        message = location.state.message;
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>My Projects</h1>
                <LinkButton to="/newproject" text="Create project"/>
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <h1>Projects</h1>
            </Container>
        </div>
    );
}