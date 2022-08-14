const Footer = () => {
  return (
    <section className="bg-footer text-white font-merri pt-24 pb-8 px-10 lg:px-36 xl:px-28">
      <div className="lg:flex justify-between">
        <div className="lg:w-6/12 lg:flex justify-between">
          <ul className="lg:text-lg text-xl lg:w-8/12 mb-10 lg:mb-0">
            <li className="mb-3.5 hover:underline">
              <a href="http://inboundemotion.com/inbound-marketing">
                WHAT IS INBOUND MARKETING?
              </a>
            </li>
            <li className="my-3.5 hover:underline">
              <a href="http://inboundemotion.com/hubspot">
                WHAT IS HUBSPOT AND HOW DOES IT WORK?
              </a>
            </li>
            <li className="my-3.5 hover:underline">
              <a href="http://inboundemotion.com/diseno-web">
                DESIGN YOUR WEBSITE
              </a>
            </li>
            <li className="my-3.5 hover:underline">
              <a href="http://inboundemotion.com/recursos">WE HELP YOU</a>
            </li>
            <li className="mt-3.5 hover:underline">
              <a href="http://inboundemotion.com/agencia">KNOW US</a>
            </li>
          </ul>

          <ul className="text-sm lg:w-4/12 my-10 lg:my-0">
            <li className="mb-5 hover:underline">
              <a
                href="https://plus.google.com/u/0/+Inboundemotionplus/posts"
                className="flex"
              >
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1486351614-png/Inbound_Emotion/iconos/google.png"
                  alt="Google+"
                />
                Enter our Circle
              </a>
            </li>
            <li className="my-5 hover:underline">
              <a href="https://twitter.com/inboundemotion" className="flex">
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1483587023-png/Inbound_Emotion/iconos/twiiter-1.png"
                  alt="Twitter"
                />
                follow us
              </a>
            </li>
            <li className="my-5 hover:underline">
              <a
                href="https://www.facebook.com/inboundemotion"
                className="flex"
              >
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1483587013-png/Inbound_Emotion/iconos/facebook.png"
                  alt=""
                />
                become a fan
              </a>
            </li>
            <li className="my-5 hover:underline">
              <a
                href="http://www.pinterest.com/inboundemotion/"
                className="flex"
              >
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1483055534-png/Inbound_Emotion/iconos/pinterest.png"
                  alt=""
                />
                See our pins
              </a>
            </li>
            <li className="my-5 hover:underline">
              <a
                href="https://www.linkedin.com/company/inbound-emotion"
                className="flex"
              >
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1486920267-png/Inbound_Emotion/iconos/linkedin.png"
                  alt=""
                />
                connect with us
              </a>
            </li>
            <li className="mt-5 hover:underline">
              <a href="http://inboundemotion.com/blog/rss.xml" className="flex">
                <img
                  className="w-6 h-6 mr-4"
                  src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1483587018-png/Inbound_Emotion/iconos/rss.png"
                  alt=""
                />
                Don't miss a thing
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:w-5/12">
          <div className="mb-10">
            <h4 className="text-lg">WHERE WE ARE</h4>
            <p className="leading-6 text-sm">
              Inbound Emotion Barcelona
              <br />
              C/ Rambla de Catalunya 125, 3º 2ª
              <br />
              08008 Barcelona
              <br />
              +34 931 591 821
            </p>
          </div>
          <div className="lg:flex justify-between">
            <p className="text-sm lg:w-5/12 leading-6 mb-10">
              Inbound Emotion Mallorca
              <br />
              Coworking Sa Batedora
              <br />
              C/ Son Sabater, 35
              <br />
              07510 Sineu
              <br />
              +34 699 480 918
            </p>
            <p className="text-sm lg:w-5/12 leading-6">
              Inbound Emotion Tarragona <br />
              C/ Monterols 16, 1º 2ª <br />
              43201 Reus <br />
              +34 977 894 264 <br />
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="mt-16">
        <h2 className="text-2xl text-orng leading-9">
          At Inbound Emotion,
          <br /> we do the marketing that people like
        </h2>

        <ul className="md:flex lg:justify-between mt-6">
          <li className="hover:underline text-sm lg:w-3/12">
            <a href="https://www.inboundemotion.com/politica-privacidad?hsLang=es">
              Legal Notice and Privacy Policy
            </a>
          </li>
          <li className="hover:underline text-sm lg:w-3/12 md:mx-10 lg:mx-0 my-1">
            <a href="https://www.inboundemotion.com/politica-cookies/?hsLang=es">
              Cookies policy
            </a>
          </li>
          <li className="hover:underline text-sm lg:w-4/12">
            <a href="mailto: agencia@inboundemotion.com">
              agency@inboundemotion.com
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
