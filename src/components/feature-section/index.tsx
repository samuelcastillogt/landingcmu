import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`bg-white pb-6`)} id="funciona">
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6 bg-white`)}>
        <div className={tw(`mb-16 text-center`)}>
          <h4 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Como Funciona la <b>Aplicacion</b></h4>
          <p className={tw(`mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>
            Como elimina la <b>Agorafobia</b> nuestra aplicacion 
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Terapia Cognitivo Conductual</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Es la terapia mas usada para los desordenes de pensamiento. Utilizada para tratar desde el alcoholismo hasta
              la agorafobia. No utliza medicamentos y las recaidas son mas leves y faciles de llevar.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Empoderamiento del paciente</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Aprenderas tecnicas para eliminar el malestar. Esto te ayuda a perderle miedo a los sintomas fisicos y
              hace que la exposicion sea menos molesta.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Crea tolerancia en base a la confianza</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Los malestares disminuyen al ritmo de la exposicion. Si logras torerar mas tiempo, mas duro y mas consistente,
              los sintomas dejaran de tener efecto en ti.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Millones de personas ya se han curado</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              No inventamos nada. El sistema se ha utilizado desde hace decadas. Millones de personas ya han superado su ansiedad.
              Nosotros solo lo volvemos mas agradable y accesible para todos.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>A tu ritmo y tu gusto</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              En mi caso el mareo era lo mas molesto. Por lo que trabajar ese sintoma era para mi el mas importante. De igual manera 
              aprende solo lo que necesitas y al ritmo que deseas.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Tecnicas que nunca creerias que funcionan</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Crea habitos como la autosugestion para superar la agorafobia, o si lo prefieres participa en el foro 
              y descubre que no estas solo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
