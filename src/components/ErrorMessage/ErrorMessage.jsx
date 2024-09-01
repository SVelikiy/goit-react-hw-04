import css from './ErrorMessage.module.css'

export default function ErrorMessage() {
    return (
        <div>
            <p className={css.errorMessage}>Sorry something went wrong, please try again later or reload page!</p>
        </div>
    )
}