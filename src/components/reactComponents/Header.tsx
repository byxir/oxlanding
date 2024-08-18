import { InfoSlideover } from "./InfoSlideover";
import WhiteButtonReact from "./WhiteButtonReact";

const Header = () => {
  return (
    <div
      className={`w-full flex justify-center fixed top-6 z-50 transition-transform duration-300`}
    >
      <div className="max-w-desktop mx-auto rounded-[20px] bg-blurBase backdrop-blur-xl w-full py-2 h-20 items-center flex justify-between px-6 space-x-10">
        <div className="h-10">
          <img src="../../../logoHeader.png" alt="" className="h-full" />
        </div>
        <div className="flex space-x-8 pt-1">
          <a
            href="/"
            className="cursor-pointer transition-colors hover:text-active ease-in-out"
          >
            HOME
          </a>
          <a
            href="/about"
            className="cursor-pointer transition-colors hover:text-active ease-in-out"
          >
            ABOUT US
          </a>
          <a
            href="/portfolio"
            className="cursor-pointer transition-colors hover:text-active ease-in-out"
          >
            PORTFOLIO
          </a>
          <a
            href="/cards"
            className="cursor-pointer transition-colors hover:text-active ease-in-out"
          >
            CRYPTO CARDS
          </a>
          <a
            href="/processing"
            className="cursor-pointer transition-colors hover:text-active ease-in-out"
          >
            CRYPTO PROCESSING
          </a>
        </div>
        <WhiteButtonReact
          link="https://t.me/0xlabs"
          className="flex space-x-3 items-center"
        >
          <img src="../../../telegramLogo.png" alt="" className="w-6" />
          <div className="leading-4 flex items-center pt-1">CONTACT</div>
        </WhiteButtonReact>
      </div>
    </div>
  );
};

export default Header;
