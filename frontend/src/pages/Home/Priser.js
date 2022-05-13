import React from 'react'

const data = [
  { behandling: "Rehabiliteringsträning (30 min)", Besök: "300:-", Hembesök: "500:-", Videochat: "150:-" },
  { behandling: "Rehabiliteringsträning (45 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "200:-" },
  { behandling: "Rehabiliteringsträning (60 min)", Besök: "500:-", Hembesök: "700:-", Videochat: "250:-" },
  { behandling: "Råd om ergonomi (30 min)", Besök: "300:-", Hembesök: "600:-", Videochat: "150:-" },
  { behandling: "Råd om ergonomi (45 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "200:-" },
  { behandling: "Råd om ergonomi (60 min)", Besök: "500:-", Hembesök: "600:-", Videochat: "250:-" },
  { behandling: "Olika fysikaliska hjälpmedel (30 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "150:-" },
  { behandling: "Olika fysikaliska hjälpmedel (45 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "200:-" },
  { behandling: "Olika fysikaliska hjälpmedel (60 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "250:-" },
  { behandling: "Muskeltöjning (30 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "150:-" },
  { behandling: "Muskeltöjning (45 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "200:-" },
  { behandling: "Muskeltöjning (60 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "250:-" },
  { behandling: "Triggerpunktsbehandling (30 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "150:-" },
  { behandling: "Triggerpunktsbehandling (45 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "200:-" },
  { behandling: "Triggerpunktsbehandling (60 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "250:-" },
  { behandling: "Mobilisering (30 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "150:-" },
  { behandling: "Mobilisering (45 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "200:-" },
  { behandling: "Mobilisering (60 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "250:-" },
  { behandling: "Kostrådgivare (30 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "150:-" },
  { behandling: "Kostrådgivare (45 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "200:-" },
  { behandling: "Kostrådgivare (60 min)", Besök: "400:-", Hembesök: "600:-", Videochat: "250:-" },
  
]

function Priser() {
  return (
    <div className='priser my-5'>
    <table>
        <tr>
          <th>Behandling</th>
          <th>Besök</th>
          <th>Hembesök</th>
          <th>Videchat</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.behandling}</td>
              <td>{val.Besök}</td>
              <td>{val.Hembesök}</td>
              <td>{val.Videochat}</td>
            </tr>
          )
        })}
      </table>



    </div>
  )
}

export default Priser