import { CaretDoubleDown } from 'phosphor-react';

import './Home.scss'

export function Home() {
  return (
    <section className='homeContainer' id='home'>

      <p>LOGO</p>

      <h1>Leandro Ribeiro</h1>
      <strong>Advocacia e Assessoria Jurídica</strong>
      <span>OAB-RN 20176.</span>

      <CaretDoubleDown size={48}/>

    </section>
  )
}