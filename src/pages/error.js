import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error, "Error")

    return (
        <div className="container justify-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpeceted error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage