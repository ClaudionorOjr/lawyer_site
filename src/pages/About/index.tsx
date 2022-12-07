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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eaque, iusto quisquam perspiciatis earum atque est ea esse magni repudiandae fugiat recusandae, reprehenderit ipsam vitae non. Consectetur illum beatae commodi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illum saepe temporibus commodi quia culpa cupiditate excepturi sit deleniti animi enim aliquam quisquam, dicta, esse suscipit recusandae dolor cum harum. 
        </p>

        <blockquote>
          "Rapadura é doce, mas num é mole não." – <cite>Fulano D Tal</cite>
        </blockquote>
      </div>
    </section>
  )
}