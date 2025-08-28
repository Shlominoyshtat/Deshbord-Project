export default function Member(props:{avatar:string,name:string,status:string,statusNew:boolean}){
    return(
        <>
        {props.statusNew &&
        <button id="buttonCards">
            <section id="cards">
                <p id="img">{props.avatar}</p>
                <p id="nameStudent">{props.name}</p>
                <p id="status">{props.status}</p>
                <button id="Role">Role</button>
        </section>
        </button>}
        </>
    )
}