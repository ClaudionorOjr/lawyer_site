import perfilImage from '/assets/leandro_editado.jpeg';
import './About.scss'

export function About() {
  return (
    <section className='aboutContainer' id='about'>

    <div className="thumb">
      <img src={perfilImage} alt="Minha foto" />
    </div>

      <div>
        <h2>Sobre mim</h2>
        <p>
          Sou Leandro Ribeiro, Advogado, formado pela Universalidade Potiguar. 
          Atuo nas área mais sensíveis da sociedade, empenhando meus esforços para garantir os direitos dos cidadãos.
          Para isto, conto com minha disciplina e coragem, qualidades profissionais que fazem parte da estrutura do sucesso.
          Possuo experiências variadas, da docência até responsável técnico de segurança do trabalho. Vivências que aplico nas relações como advogado para resolver os litígios e promover a satisfação dos clientes. 
        </p>
      </div>
    </section>
  )
}