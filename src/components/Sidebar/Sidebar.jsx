import styles from "./Sidebar.module.css";
import { Avatar } from "../Avatar/Avatar";
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
                alt="Banner Pessoa Logada" 
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar src="http://github.com/HendersonRK.png" />
                <strong>Henderson Kettermann</strong>
                <span>Estudante</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}