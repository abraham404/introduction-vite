import PropTypes, { number } from 'prop-types'

//const  greeting = () => "Hola buenas noches";

export const FirstApp = ({title, subTitle='ef', name}) => {
    return (
    <>
        <h1> { title } </h1>
        <h2>{subTitle}</h2>
        <h2>{ name }</h2>
    </>
)
} 

FirstApp.protoTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number
}

FirstApp.defaultProps = {
    name: 'Jorge Rosas',
    subTitle: 'No hay subtitle',
    title: 'No hay título',
}