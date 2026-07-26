import "./styles/AppleButton.css"

export default function AppleButton(props:{
    text:string
}) {
    return(
    <div className="apple-button-div">
    <button className="apple-button">{props.text}</button>
    </div>)
}