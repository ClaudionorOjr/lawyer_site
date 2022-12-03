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
            Rua Jardim Bromélia. <br />
            Térreo, sala 02.
          </address>

          <a href="mailto:email@provedor.com.br?subject=Advocacia e Assessoria Jurídica&body=Olá Dr. Fulano, gostaria de marcar um horário." id='email'>
            <EnvelopeSimple size={32}/> 
            johndoe@gmail.com
          </a> 

          <a href='tel:84981888888' id='whatsapp'> 
            <WhatsappLogo size={32} />
            (84) 98188-8888
          </a>

          <a href='#' id='instagram'> 
            <InstagramLogo size={32}/>
            @johndoe
          </a >
        </div>
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.167844225425!2d-37.328899799999995!3d-5.236312399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba07d9dc3a4c33%3A0xe49e7c1b96c1c158!2sR.%20Jardim%20Brom%C3%A9lia%2C%2033%20-%20Alto%20do%20Sumar%C3%A9%2C%20Mossor%C3%B3%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1669043825010!5m2!1spt-BR!2sbr" width="400" height="300" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
      </section>

      <div className='credits' >
        2022 Desenvolvido por <span> &lt;ClaudionorOjr/&gt; </span>
        <div className='devSocialMedias'>
          <a target='_blank' href="https://github.com/claudionorojr">
            <GithubLogo size={32} weight='fill' alt="Github Logo"/>
          </a>
          <a target='_blank' href="https://www.linkedin.com/in/claudionorojr/">
            <LinkedinLogo size={32} weight='fill' alt="Linkedin Logo"/>
          </a>
        </div>
      </div>
    </footer>
  )
}