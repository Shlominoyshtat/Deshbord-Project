export default function Member(props:{statusNew:boolean, setTasks:Function}){
    return(
        <>
        <button id="buttonCards" onClick={()=>{props.setTasks(['Create database schema','Set up CI/CD pipeline'])}}>
            <section id="cards">
                <p className="img" id="sn">SN</p>
                <p id="nameStudent">Shlomi Noyshtat</p>
                <p id="status">active</p>
                <button id="Role">Role</button>
        </section>
        </button>
        {props.statusNew &&
        <button id="buttonCards" onClick={()=>{props.setTasks(['Draft API documentation'])}}>
            <section id="cards">
                <p className="img" id="mk">MK</p>
                <p id="nameStudent">Moti Kopshitz</p>
                <p id="status">unActive</p>
                <button id="Role">Role</button>
        </section>
        </button>}
        {props.statusNew &&
        <button id="buttonCards" onClick={()=>{props.setTasks(['Assign team roles','Prepare test cases','Deploy to staging'])}}>
            <section id="cards">
                <p className="img" id="sc">SC</p>
                <p id="nameStudent">Sam Cohen</p>
                <p id="status">unActive</p>
                <button id="Role">Role</button>
        </section>
        </button>}
        <button id="buttonCards" onClick={()=>{props.setTasks(['Design UI mockups','Configure environment variables'])}}>
            <section id="cards">
                <p className="img" id="tb">TB</p>
                <p id="nameStudent">Tayllor Brooks</p>
                <p id="status">active</p>
                <button id="Role">Role</button>
        </section>
        </button>
        <button id="buttonCards" onClick={()=>{props.setTasks(['This student has no work to submit.'])}}>
            <section id="cards">
                <p className="img" id="jl">JL</p>
                <p id="nameStudent">Jon Levay</p>
                <p id="status">active</p>
                <button id="Role">Role</button>
        </section>
        </button>
        {props.statusNew &&
        <button id="buttonCards" onClick={()=>{props.setTasks(['Optimize database queries','Launch production release'])}}>
            <section id="cards">
                <p className="img" id="lo">LO</p>
                <p id="nameStudent">Leon Omar</p>
                <p id="status">unActive</p>
                <button id="Role">Role</button>
        </section>
        </button>}
        </>
    )
}