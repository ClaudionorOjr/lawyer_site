import { CaretDoubleDown } from 'phosphor-react';
import { WhatsappButton } from '../../components/WhatsappButton';

import logo from '/assets/logo.png';

import './Home.scss'

export function Home() {
  return (
    <section className='homeContainer' id='home'>

      <img className='logo' src={logo} alt="Brasão com as iniciais L e R" />

      <h1>Leandro Ribeiro</h1>
      <strong>Advocacia</strong>
      <span>OAB-RN 20176.</span>

      <CaretDoubleDown size={48}/>

      <WhatsappButton />

    </section>
  )
}