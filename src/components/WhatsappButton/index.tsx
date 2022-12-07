import WhatsappLogo from '/assets/whatsapp.svg';
import './WhatsappButton.scss';

export function WhatsappButton(){
  return (
    <a target='_blank' href="https://api.whatsapp.com/send?phone=5584981141461&text=Olá Dr. Leandro, podemos conversar?" className='whatsappButtonContainer'>
      <img src={WhatsappLogo} alt="Botão para Whatsapp" />
    </a>
  )
}