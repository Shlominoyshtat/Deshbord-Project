import './style/navbar.css'
import './style/main.css'
import Header from './Components/header.tsx'
import Member from './Components/member.tsx'
import { useState } from 'react'

function App() {
  const [statusNew, setStatus] = useState(true)
  return (
    <>
    
      <Header changeStatus={statusNew} setstatus={setStatus}/>
      <Member avatar='SN' name='shlomi noyshtat' status='active' statusNew={true} />
      <Member avatar='MK' name='Moti Kopshitz' status='unActive' statusNew={statusNew}/>
      <Member avatar='SC' name='Sam Cohen' status='unActive' statusNew={statusNew}/>
      <Member avatar='TB' name='Tayllor Brooks' status='active' statusNew={true}/>
      <Member avatar='JL' name='Jon Levay' status='active' statusNew={true}/>
      <Member avatar='LO' name='Leon Omar' status='unActive' statusNew={statusNew}/>
    </>
  )
}

export default App
