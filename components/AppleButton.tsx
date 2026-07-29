import "./styles/AppleButton.css"

export default function AppleButton(props:{
    text:string,
    to:string
}) {

    function handleClick(link:string) {
        window.location.href=link;
    }

    return(
    <button className="apple-button" onClick={()=>handleClick(props.to)}>{props.text}</button>
    )
}