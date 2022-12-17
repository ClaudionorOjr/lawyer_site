import { EnvelopeSimple, GithubLogo, InstagramLogo, LinkedinLogo, MapPin, WhatsappLogo } from 'phosphor-react'
import './Footer.scss'

export function Footer() {

  return (
    <footer id='footer'>  
      <section className='contactContainer'>

        <div className="contactContent">
          <h3>Pode me contactar pelos meios abaixo:</h3>
          <address>
            <MapPin size={32} />
            Rua Francisco Isódio, Nº 321, <br /> Centro, Mossoró/RN. <br />
            Escritório Valença de Alburquerque. < br />
            Sala 05.
          </address>

          <a href="mailto:leandroribeiroadv.jus@gmail.com?subject=Advocacia&body=Olá Dr. Leandro, gostaria de marcar um horário." id='email'>
            <EnvelopeSimple size={32}/> 
            leandroribeiroadv.jus@gmail.com
          </a> 

          <a href='tel:84981141461' id='whatsapp'> 
            <WhatsappLogo size={32} />
            (84) 98114-1461
          </a>

          <a target="_blank" href='https://www.instagram.com/leandror_adv/' id='instagram'> 
            <InstagramLogo size={32}/>
            @leandror_adv
          </a >
        </div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1670270054403!5m2!1spt-BR!2sbr!6m8!1m7!1sbCqXEgZIUHZxXIWqmiCBLA!2m2!1d-5.190765940572901!2d-37.34529259256129!3f133.78493248294066!4f0.3329074362954998!5f0.7820865974627469" width="600" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <div className='credits' >
        
        2022 <sup>&copy;</sup> &ensp;Desenvolvido por
        <span> 
          &lt;ClaudionorOjr/&gt;
        
        <div className={'devSocialMedias'}>
          <a target='_blank' href="https://github.com/claudionorojr">
            <GithubLogo size={32} weight='fill' alt="Github Logo"/>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/claudionorojr/">
            <LinkedinLogo size={32} weight='fill' alt="Linkedin Logo"/>
          </a>
        </div>
        
        </span>
      </div>
    </footer>
  )
}