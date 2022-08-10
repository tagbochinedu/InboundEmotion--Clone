const Header = () => {
  return (
    <div className="px-24 py-8">
      <div className="flex justify-between mb-10">
        <p className="text-sm text-slate-700">
          +34 931 591 821{" "}
          <a
            className="text-slate-500 hover:underline"
            href="mailto: agencia@inboundemotion.com"
          >
            agency@inboundemotion.com
          </a>
        </p>
        <ul className="flex">
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
      <div className='mt-10 flex justify-between'>
        <img
          className="w-64"
          src="https://www.inboundemotion.com/hs-fs/hub/340557/file-1490281506-png/Inbound_Emotion/logo_nuevo.png"
          alt="logo"
        />
        <ul className='flex'>
          <li>
            <a href="http://inboundemotion.com/inbound-marketing" className='text-slate-500 hover:text-slate-700 mx-4'>
              Inbound Marketing
            </a>
          </li>
          <li>
            <a href="http://inboundemotion.com/diseno-web" className='text-slate-500 hover:text-slate-700 mx-4'>Web Design</a>
          </li>
          <li>
            <a href="http://inboundemotion.com/blog" className='text-slate-500 hover:text-slate-700 mx-4'>Blog</a>
          </li>
          <li>
            <a href="http://inboundemotion.com/recursos" className='text-slate-500 hover:text-slate-700 mx-4'>Means</a>
          </li>
          <li>
            <a href="http://inboundemotion.com/agencia" className='text-slate-500 hover:text-slate-700 mx-4'>Agency</a>
          </li>
          <li>
            <a href="https://www.inboundemotion.com/es/consulta-personalizada-de-inbound-marketing?hsLang=es" className='bg-orange-400 rounded-2xl text-white py-1.5 px-10 ml-4'>
              REQUEST A CONSULTATION
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
