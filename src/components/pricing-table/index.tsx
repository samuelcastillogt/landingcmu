import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Tecnicas profesionales y testeadas para reducir o eliminar los sintomas fisicos`,
  `Ejercicios de relajacion para antes, durante y despues de exponerte`,
  `Teoria sobre el circulo de pensamiento que te ayudara a comprender mejor tu problema`,
  `Un completo programa para superar la agorafobia`,
  `Tecnicas Cognitivo conductuales que aceleraran el proceso`,
  `Una comunidad de agorafobicos que te apoyaran en todo tu proceso`,
  `Sesiones de terapia en vivo (Proximamente)`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-7xl font-bold text-gray-800 mb-12`)}>Estas listo para dejar en casa la Agorafobia?</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
            No te mentiremos, no es facil y por momentos parece imposible, pero, es posible. Requeria tu compromiso total,
             que dejes las excusas y sobre todo que estes dispuesto a realizar todos los ejercicios. Pero tienes una comunidad
             que al igual que tu, esta pasando por lo mismo y que te compende y apoya. 
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                )}
              >
                Que encontraras en la aplicacion:
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
          id="precio"
        >
          <p className={tw(`text-lg font-medium text-gray-800`)}>Todo esto por....</p>
          <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-gray-800`)}>
            $1/mo
          </div>
          <Button primary modifier="mt-6">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
