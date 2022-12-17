import { ChatCenteredText, CircleWavyCheck } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { CustomizedInput } from '../../components/Input'
import './Services.scss'

export function ContactForm() {
  const [fileName, setFileName] = useState('Anexar arquivo')
  const [subjectReply, setSubjectReply] = useState('')

  function handleChange(event: FormEvent<HTMLInputElement>){
    const value = event.currentTarget.value
    
    // Retorna um fakepath até o arquivo, estou pegando somente o nome do arquivo
    setFileName(value.substring(12))
  }

  return (
    <section className="servicesContainer" id='services'>

      <div className="services">
        <h2>Áreas de Atuação</h2>

        <p> <CircleWavyCheck size={24} weight="fill"/> Previdenciária</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Trabalhista</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Direito da família</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Tributária</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Empresarial</p>
      </div>

      <form action="https://formsubmit.co/leandroribeiroadv.jus@gmail.com" method="POST" encType="multipart/form-data">
        <h3> <ChatCenteredText size={28} weight="fill"/> Dúvidas? Vamos conversar a respeito!</h3>
        <p>Utilize do formulário para entrar em contato, ou caso seja de sua preferência, mais abaixo você encontra outros meios de contato.</p>

        <CustomizedInput 
          tag="input" 
          type="text" 
          name="name" 
          id="name" 
          textLabel="Nome" 
          placeholder='Digite seu nome completo' 
          required 
        />

        <CustomizedInput 
          tag="input" 
          type="email" 
          name="email" 
          id="email" 
          textLabel="E-mail" 
          placeholder='Informe seu e-mail para contato' 
          required 
        />

        <CustomizedInput 
          tag="input" 
          type="text" 
          name="subject" 
          id="subject" 
          textLabel="Assunto" 
          placeholder='Sobre o que deseja tratar'
          subject={setSubjectReply}
        />

        {/* Editar o título do e-mail de resposta automaticamente com o que for digitado em 'value' */}
        <input type="hidden" name="_subject" value={subjectReply} />
        
        <CustomizedInput 
          tag="textarea" 
          name="description" 
          id="description" 
          textLabel="Descrição" 
          placeholder='Se preferir fale um pouco a respeito do assunto'
        />

        {/* Permite anexar arquivos ao formulário. 'multiple' permitir anexar vários arquivos. */}
        <input 
          className='inputFile' 
          type="file" 
          id='file' 
          name="attachment" 
          accept=".doc,.pdf,image/*" 
          multiple={true}
          onChange={handleChange}
        />
        <label htmlFor="file" className='labelInputFile'>
          <span>{fileName}</span>
          <span>Procurar</span>
        </label>

        <input type="hidden" name="_captcha" value="false"></input>

        <button type="submit">Enviar</button>

      </form>
    </section>
  )
}