import "./styles/PageHero.css"

export default function PageHero(props:{
    text:string,
    subText: string
}) {
    return(
        <section className="page-hero">
            <div>
                <h1>{props.text}</h1>
                <p>{props.subText}</p>
            </div>
        </section>
    )
}