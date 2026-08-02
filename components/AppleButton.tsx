import { useNavigate } from 'react-router-dom';
import "./styles/AppleButton.css"

export default function AppleButton(props:{
    text:string,
    to:string
}) {

    const navigate=useNavigate();

    function handleClick(link:string) {
        navigate(link);
    }

    return(
    <button className="apple-button" onClick={()=>handleClick(props.to)}>{props.text}</button>
    )
}