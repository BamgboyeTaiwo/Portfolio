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
        destination: 'https://app.wakanda-business.com/signin',
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
      //Newww web
      {
        source: '/pureworkerweb',
        destination: ' https://pureworker.com/',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/cowrisweb',
        destination: ' https://www.cowris.com/',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/kudeeexpressweb',
        destination: ' https://kudeeexpress.com/',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/crestbaseweb',
        destination: ' https://crestbasehq.com/',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/nairaboom',
        destination: ' https://nairaboom.ng/',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/saldamsLogistics',
        destination: 'https://saldamslogistical.com/',
        permanent: false,
        basePath: false, 
      }, 
      //----------
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

      {
        source: '/pureworker',
        destination: 'https://play.google.com/store/apps/details?id=com.pure_worker_app',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/crestbase',
        destination: 'https://play.google.com/store/apps/details?id=com.crestbase.crestbasemobileapp&pcampaignid=web_share',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/liveeasy',
        destination: 'https://play.google.com/store/apps/details?id=com.simplepark.live_easy',
        permanent: false,
        basePath: false, 
      }, 
      {
        source: '/cowrisapp',
        destination: 'https://play.google.com/store/apps/details?id=com.cowris',
        permanent: false,
        basePath: false, 
      }, 
    ]
  },
}

module.exports = nextConfig
