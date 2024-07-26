'use client';
import {llamarPost, onSubmit} from './hook.js';

export function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
    )
  }
export function TablaI(){
    return (
      <table>
       <th>Tabla Ejemplo</th>
       <tr>Es una columna</tr> 
      </table>
    )
  }

export function Boton(){
  return(
    <button onClick={onSubmit} className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl" type="button">
      Enviar info 
    </button>
  )
}

export function BotonP(){
  return(
      <button type='button' onClick={llamarPost} className="ml-5 cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-red-500">
          <span className="font-bold text-white text-xl relative z-10 group-hover:text-red-500 duration-500">Llamar Post</span>
          <span className="absolute top-0 left-0 w-full bg-red-500 duration-500 group-hover:-translate-x-full h-full"></span>
          <span className="absolute top-0 left-0 w-full bg-red-500 duration-500 group-hover:translate-x-full h-full"></span>
          <span className="absolute top-0 left-0 w-full bg-red-500 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
          <span className="absolute delay-300 top-0 left-0 w-full bg-red-500 duration-500 group-hover:translate-y-full h-full"></span>
      </button>
  )
}

export default function Components(){
    return (
        <section>
            <Profile/>
            <TablaI/>
            <Boton/>
            <BotonP/>
        </section>
    )
}
  