export default function Tasks(props:{task:string[]}) {
  return (
    <>
      <section id="task">
        Tasks
        <ul>
          {props.task.map((task,i)=>(
            <label>
            <li key={i}><input type="checkbox"/><span>{task}</span></li>
            </label>
        ))}
        </ul>
      </section>
    </>
  );
}
