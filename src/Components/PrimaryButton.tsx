import styles from '@/app/page.module.css'

type PrimaryButtonProps = {
    className? : string,
    children? : React.ReactNode
}

const PrimaryButton = ({className, children}: PrimaryButtonProps) => {
    return (
        <button className={`${styles.primaryButton} ${className}`}>
            {children}
        </button>
    )
}

export default PrimaryButton