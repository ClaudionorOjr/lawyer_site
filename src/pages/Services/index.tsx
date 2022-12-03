import { ChatCenteredText, CircleWavyCheck } from 'phosphor-react'
import { FormEvent, useEffect, useState } from 'react'
import { CustomizedInput } from '../../components/Input'
import './Services.scss'

export function ContactForm() {
  const [fileName, setFileName] = useState('Anexar arquivo')

  function handleChange(event: FormEvent<HTMLInputElement>){
    const value = event.currentTarget.value
    
    // Retorna um fakepath e o arquivo, estou pegando somente o nome do arquivo
    setFileName(value.substring(12))
  }

  return (
    <section className="servicesContainer" id='services'>

      <div className="services">
        <h2>Serviços Prestados</h2>

        <p> <CircleWavyCheck size={24} weight="fill"/> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Lorem ipsum dolor sit amet.</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Lorem ipsum dolor sit amet consectetur.</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum?</p>

        <p> <CircleWavyCheck size={24} weight="fill"/> Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
      </div>

      <form action="https://formsubmit.co/claudionorojr@hotmail.com" method="POST" encType="multipart/form-data">
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
        />

        {/* Editar o título do e-mail de resposta automaticamente com o que for digitado em 'value' */}
        <input type="hidden" name="_subject" value="New submission!" />
        
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

        <button type="submit">Enviar</button>

      </form>
    </section>
  )
}