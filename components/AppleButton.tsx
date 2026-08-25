import { useNavigate } from 'react-router-dom';
import "./styles/AppleButton.css"

export default function AppleButton(props: {
    text: string,
    to: string
}) {
    const navigate = useNavigate();

    function handleClick(link: string) {
        // 1. Handle same-page scrolling (e.g., to="#features")
        if (link.startsWith("#")) {
            const elementId = link.slice(1);
            const element = document.getElementById(elementId);
            
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } 
        // 2. Handle external links & protocols (tel, mailto, http)
        else if (
            link.startsWith("tel:") || 
            link.startsWith("mailto:") || 
            link.startsWith("http")
        ) {
            window.location.href = link;
        } 
        // 3. Handle normal internal page navigation (e.g., to="/about")
        else {
            navigate(link);
            window.scrollTo(0, 0);
        }
    }

    return (
        <button className="apple-button" onClick={() => handleClick(props.to)}>
            {props.text}
        </button>
    )
}