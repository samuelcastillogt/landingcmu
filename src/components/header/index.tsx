import { tw, css } from 'twind/css';
import Button from '@/components/button';
import {GiBrainstorm, GiBackPain} from "react-icons/gi"
import {FaTheaterMasks, FaRegSadTear} from "react-icons/fa"
const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8`)}>
      <h1 className={tw(`font-sans font-bold text-5xl md:text-5xl lg:text-3xl text-center leading-snug text-gray-800`)}>
      La única aplicación para la Agorafobia con terapia cognitivo conductual
      </h1>
      <div className={tw(`max-w-xl mx-auto`)}>
        <p className={tw(`mt-10 text-gray-500 text-center text-xl lg:text-3xl`)}>
        Aprende a manejar tu <b>agorafobia</b> con técnicas probadas de manejo de la ansiedad.
        </p>
      </div>
      <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
        <Button primary>Quiero iniciar</Button>
      </div>
    </div>
    <div className={tw(`flex justify-center w-full`)}>
      <div className={tw(`mt-4 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>Controla las 4 etapas de la <b>agorafobia</b></p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
          <GiBrainstorm className={tw(`m-12 mb-8`)} width={120} fontSize={"50px"} />
          <GiBackPain className={tw(`m-12`)} width={140} fontSize={"50px"} />
          <FaTheaterMasks className={tw(`m-12`)} width={140} fontSize={"50px"} />
          <FaRegSadTear className={tw(`m-12`)} width={140} fontSize={"50px"} />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
