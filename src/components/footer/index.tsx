import { tw } from 'twind';
import Button from '@/components/button';

// const productLinks = [`Features`, `Customers`, `Platform`, `Pricing`, `Enterprise`, `What's new?`];
// const aboutLinks = [`About Us`, `Careers`, `Leadership`, `Blog`, `Events`, `Press`];
// const resourceLinks = [
//   `Get started`,
//   `Guides`,
//   `Tools`,
//   `Case studies`,
//   `Solutions`,
//   `FAQs`,
//   `Help Center`,
//   `Training`,
//   `Other resources`,
// ];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`mb-14 flex items-center w-full`)}>
        <img className={tw(`h-12 w-12 mr-4`)} src="logo.svg" alt="logo" width={48} height={48} />
        <p className={tw(`text-4xl text-indigo-500 font-bold`)}>Catch My Umbrella</p>
      </div>
      
    </div> 
  </footer>
);

export default Footer;
