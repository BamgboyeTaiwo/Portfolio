/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/BamgboyeTaiwo',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/Instagram',
        destination: '#',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/BamgboyeTeee',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/linkledin',
        destination: 'https://www.linkedin.com/in/taiwo-bamgboye/',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/wakandacrm',
        destination: 'https://wakanda-crm.vercel.app',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/wakandabusiness',
        destination: 'https://www.wakanda-business.com/',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/wakandacommunity',
        destination: 'https://wakanda.community/',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/edgetechies',
        destination: 'http://edgetechies.com',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/superjara',
        destination: 'https://www.superjara.com',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/moviewebsite',
        destination: ' https://universalmovies.netlify.app/',
        permanent: false,
        basePath: false, 
      },  
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1k-J0iH5fyzfCZ1_xrgob9FfDrJr2vvAz/view?usp=sharing',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/nfthub',
        destination: ' https://nfthub-nine.vercel.app',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/wakandapp',
        destination: 'https://play.google.com/store/apps/details?id=com.african_founders.Wakanda',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/ebimarketapp',
        destination: 'https://play.google.com/store/apps/details?id=com.ebimarketplaceapp.ebimarketplace',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/payment_hoob',
        destination: 'https://play.google.com/store/apps/details?id=com.ebimarketplaceapp.ebimarketplace',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/interpocket',
        destination: 'https://play.google.com/store/apps/details?id=com.interpocket.v1',
        permanent: false,
        basePath: false, 
      },
      {
        source: '/cydene',
        destination: 'https://play.google.com/store/apps/details?id=com.cydeneexpress',
        permanent: false,
        basePath: false, 
      }, 
    ]
  },
}

module.exports = nextConfig
