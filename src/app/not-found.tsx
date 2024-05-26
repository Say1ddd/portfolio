import styles from '@/app/notfound.module.css'

const NotFound = () => {
return (
    <div className={styles.notFound}>
        <h1 className={styles.title}>Whoops!</h1>
        <p className={styles.sub}>You might have stumbled upon a page that never existed or is currently being worked on.</p>
    </div>
);
}

export default NotFound;