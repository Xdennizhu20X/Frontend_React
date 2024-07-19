function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
    )
  }
function TablaI(){
    return (
      <table>
       <th>Tabla Ejemplo</th>
       <tr>Es una columna</tr> 
      </table>
    )
  }

export default function Components(){
    return (
        <section>
            <Profile/>
            <TablaI/>
        </section>
    )
}
  