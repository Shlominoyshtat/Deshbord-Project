export default function Header(props:{changeStatus:string,setstatus:Function}){
    return(
        <>
        <h1>Campus Club Dashboard</h1>
        <main>
            <input type="checkbox" id='check' onClick={()=>{
                props.setstatus(n => !n)
                console.log(props.changeStatus)
            }}/>
            <label htmlFor="check">Show only active members</label>
            <button className="btnH">List</button>
            <button className="btnH">Grid</button>
            <input type="text" id='serch' placeholder='Search members by name'/>
        </main>
        </>
    )
}