import { InputHTMLAttributes, useEffect, useState } from 'react'
import './Input.scss'

interface CustomizedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  tag: 'input' | 'textarea'
  textLabel: string
}

export function CustomizedInput({tag, type, name, id, placeholder = ' ', required=false, textLabel}: CustomizedInputProps){
  const [subjectReply, setSubjectReply] = useState('')

  useEffect(() => {
    console.log(subjectReply)
  },[subjectReply])

  return (
    <div className='inputContainer'>
      {tag === 'input' ?
        <>
          <input 
            className="formInput" 
            type={type} 
            name={name} 
            id={id} 
            placeholder={placeholder}
            required={required}
            onChange={(event) => { textLabel === 'Assunto' && setSubjectReply(event.target.value)}
            }
          />
          <label className="formLabel" htmlFor={id}>{textLabel}</label>
        </> 
        :
        <>
          <textarea 
            className="formInput" 
            name={name} 
            id={id} 
            placeholder={placeholder} 
            rows={4} 
            required= {required} 
          />
          <label className="formLabel" htmlFor={id}>{textLabel}</label>
        </>
      }
    </div>
  )
}