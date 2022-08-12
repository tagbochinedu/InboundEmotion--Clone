import { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width > 1034) {
      setMenu(false);
    }
  }, [width]);

  return (
    <div className="px-6 xl:px-24 py-4 lg:py-8">
      <div className="sm:flex justify-between mb-5 lg:mb-10">
        <p className="text-sm text-slate-700">
          +34 931 591 821{" "}
          <a
            className="text-slate-500 hover:underline"
            href="mailto: agencia@inboundemotion.com"
          >
            agency@inboundemotion.com
          </a>
        </p>
        <ul className="flex justify-end md:">
          <li className="mx-1">
            <a href="https://www.facebook.com/inboundemotion">
              <img
                src="//cdn2.hubspot.net/hub/340557/file-1479648220-png/Inbound_Emotion/iconos/FACEBOOK[1].png"
                alt="fb icon"
              />
            </a>
          </li>
          <li className="mx-1">
            <a href="https://twitter.com/inboundemotion">
              <img
                src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1478637351-png/Inbound_Emotion/iconos/twiiter.png"
                alt="twitter icon"
              />
            </a>
          </li>
          <li className="mx-1">
            <a href="http://www.pinterest.com/inboundemotion/">
              <img
                src="//cdn2.hubspot.net/hub/340557/file-1478637376-png/Inbound_Emotion/iconos/PINTEREST[1].png"
                alt="pinterest icon"
              />
            </a>
          </li>
          <li className="mx-1">
            <a href="https://plus.google.com/u/0/+Inboundemotionplus/posts">
              <img
                src="//cdn2.hubspot.net/hub/340557/file-1479663260-png/Inbound_Emotion/iconos/GOOGLE_PLUS[1].png"
                alt="google icon"
              />
            </a>
          </li>
          <li className="mx-1">
            <a href="https://www.linkedin.com/company/inbound-emotion">
              <img
                src="//cdn2.hubspot.net/hub/340557/file-1475274173-png/Inbound_Emotion/iconos/LINKEDIN[1].png"
                alt="linkedin icon"
              />
            </a>
          </li>

          <li className="mx-1">
            <a href="http://inboundemotion.com/blog/rss.xml">
              <img
                src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1508469245-png/Inbound_Emotion/iconos/Sin_título-1.png"
                alt="inbound icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-start">
        <img
          className="w-48 h-4 lg:w-64 lg:h-6 mt-6 lg:mt-0"
          src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1490281506-png/Inbound_Emotion/logo_nuevo.png"
          alt="logo"
        />

        <div className="flex justify-between">
          <ul className={`${"lg:flex text-sm hidden lg:text-md w-11/12 lg:w-full"} ${menu ? "sm:block" : ""}`}>
            <li className='mb-6 md:mb-0 font-merri'>
              <a
                href="http://inboundemotion.com/inbound-marketing"
                className="text-slate-500 hover:text-slate-700 lg:mx-3"
              >
                Inbound Marketing
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/diseno-web"
                className="text-slate-500 hover:text-slate-700 lg:mx-3"
              >
                Web Design
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/blog"
                className="text-slate-500 hover:text-slate-700 lg:mx-3"
              >
                Blog
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/recursos"
                className="text-slate-500 hover:text-slate-700 lg:mx-3"
              >
                Means
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/agencia"
                className="text-slate-500 hover:text-slate-700 lg:mx-3"
              >
                Agency
              </a>
            </li>
            <li className='my-6 lg:my-0 font-advent'>
              <a
                href="https://www.inboundemotion.com/es/consulta-personalizada-de-inbound-marketing?hsLang=es"
                className="bg-orange-400 rounded-2xl text-white py-2 px-6 lg:px-10 lg:ml-4"
              >
                REQUEST A CONSULTATION
              </a>
            </li>
          </ul>
          <span
            className="lg:hidden w-auto"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {!menu ? (
              <MenuIcon className="h-16 w-16 text-orange-400 lg:hidden" />
            ) : (
              <XIcon className="h-16 w-16 text-orange-400 lg:hidden" />
            )}
          </span>
        </div>
      </div>
      <ul className={`${"text-sm sm:hidden mx-auto w-4/6"} ${menu ? "" : "hidden"}`}>
            <li className='mb-6 md:mb-0 font-merri'>
              <a
                href="http://inboundemotion.com/inbound-marketing"
                className="text-slate-500 hover:text-slate-700 lg:mx-2"
              >
                Inbound Marketing
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/diseno-web"
                className="text-slate-500 hover:text-slate-700 lg:mx-2"
              >
                Web Design
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/blog"
                className="text-slate-500 hover:text-slate-700 lg:mx-2"
              >
                Blog
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/recursos"
                className="text-slate-500 hover:text-slate-700 lg:mx-2"
              >
                Means
              </a>
            </li>
            <li className='my-6 lg:my-0 font-merri'>
              <a
                href="http://inboundemotion.com/agencia"
                className="text-slate-500 hover:text-slate-700 lg:mx-2"
              >
                Agency
              </a>
            </li>
            <li className='my-6 lg:my-0 font-advent'>
              <a
                href="https://www.inboundemotion.com/es/consulta-personalizada-de-inbound-marketing?hsLang=es"
                className="bg-orange-400 rounded-2xl text-white py-2 px-6 lg:px-10 lg:ml-4"
              >
                REQUEST A CONSULTATION
              </a>
            </li>
          </ul>
    </div>
  );
};

export default Header;
