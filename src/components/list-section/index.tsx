import { tw } from 'twind';
import FeatureSvg from '@/constants/svg/features.svg';

const listItems = [
  {
    title: `Centrada en sintomas`,
    description: `Somos agorafobicos, sabemos lo molestos que son los sintomas.
    Pero los medicos parecen ignorar esto, es por eso que hemos recopilado una serie de herramientas con las que eliminaras los sintomas.
    `,
  },
  {
    title: `Exposiciones mas seguras`,
    description: `Afronta tus exposiones con la seguridad que ganaras con tecnicas profesionales que TU MISMO aplicaras.
    Imagina salir de casa solo y no temerle a nada, sabiendo que si sufres un ataque tendras las herramientas para superarlas.
    `,
  },
  {
    title: `Reprograma tu mente`,
    description: `Descubre tu desorden de pensamiento y reprogramante para disfrutar cada salida como nunca lo haz imaginado.
    El sistema que usamos se utiliza en millones de casos con resultados sorprendente.
    `,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-28 overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>La aplicacion para curar la agorafobia</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
          Centrado en sintomas y en el empoderamiento del paciente
        </p>
      </div>
      <div className={tw(`flex flex-wrap -mx-8 items-center`)}>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <ul className={tw(`space-y-12`)}>
            {listItems.map((item, index) => (
              <li className={tw(`flex -mx-4`)} key={item.title}>
                <div className={tw(`px-4`)}>
                  <span
                    className={tw(`flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500`)}
                  >
                    {index + 1}
                  </span>
                </div>
                <div className={tw(`px-4`)}>
                  <h3 className={tw(`my-4 text-xl font-semibold`)}>{item.title}</h3>
                  <p className={tw(`text-gray-500 leading-loose`)}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={tw(`w-full lg:w-1/2 px-8`)}>
          <div className={tw(`lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0`)}>
            <FeatureSvg width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
