import Document, { Head, Html, Main, NextScript } from 'next/document';

const Favicon = () => (
  <>
    <link
      rel="icon"
      href="/favicon.ico"
    />
  </>
);

const Fonts = () => (
  <>
    
  </>
);

class CustomDocument extends Document {
  render() {

    return (
      <Html lang="en">
      <Head>
        <Favicon />
        <Fonts />
        <link 
        rel="preconnect" 
        href="https://fonts.googleapis.com"
        />
        <link 
        rel="preconnect" 
        href="https://fonts.gstatic.com" 
        crossOrigin="true"
        />

        <link href="https://fonts.googleapis.com/css2?family=Asap:wght@200;300;400;500;600;700;800;900&display=swap" 
        rel="stylesheet"
        />
        </Head>
        <body>
        <Main />
        <NextScript />


        {/* Tawk.to */}
        {/* <script
        type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
              <div id='tawk_655438e5958be55aeaafb468'></div>
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date(); Tawk_API.embedded='tawk_655438e5958be55aeaafb468';
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/655438e5958be55aeaafb468/1hf8h6r65';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);})();
              `,
            }}
          /> */}
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
