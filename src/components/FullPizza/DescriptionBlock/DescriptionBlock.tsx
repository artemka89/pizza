import styles from './DescriptionBlock.module.scss'

type DescriptionBlockProps = {
    children: React.ReactNode
}

export const DescriptionBlock: React.FC<DescriptionBlockProps> = ({children}) => {
    return (
        <div className={styles.description}>
            <p>{children}</p>
        </div>
    )
}