import classes from './styles.module.css';
export default function Haeder(){
    return <div className={classes.haeder}>
        <h3>Mern Blog App</h3>
        <ul>
            <li>Home</li>
            <li>Add Blog</li>
        </ul>
    </div>
}