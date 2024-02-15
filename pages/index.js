import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { remark } from 'remark';
import html from 'remark-html';

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet"></link>
        <title>jaieshh</title>
        <link rel="icon" href="/images/head_pic.png" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Jaieshh
        </h1>
        
        <h2 className={styles.subtitle}>
          A Lifelong student
        </h2>

        <div className={styles.description}>
          <h3>Welcome!</h3>
          <div className='imagecontainer'>
            <img src="/images/anime.png" alt="muscle baby"/>
          </div>
          <p>This is jaieshh, I hope you are doing good. Welcome to my rough note taking page.<br/>
          Here I am just going to jot down things that I am curious about and sometimes my own reflection on things.<br/>
          I fear that most us are just losing our curious selves and are just living for the sake of living.<br/><br/>
          I have made this to make sure I dont lose my curious self and jot something down everyday.</p>
        </div>
        <div className={styles.description}>
          <h3>13th Tuesday feb 24</h3>
          {/* <div className='imagecontainer'>
            <img src="/images/anime.png" alt="Description of the image"/>
          </div> */}
          <p>Recently, reading about a lot of AI stuff on twitter X. Getting FOMO so have a few projects in mind to work on.</p>
          <p>I think there have to be more goofy websites on the internet like this one, my eyes are tired of looking at beautiful stuff.</p>
          <p>Taking a course on ML in uni as well, to understand the basics, need to catch up on that.</p>
        </div>
        <div className={styles.description}>
          <h3>14th Tuesday feb 24</h3>
          <p>
            There is just soo much to learn and implement and run on the open source platforms MY GOD!!! I dont even know where to begin.
          </p>
          <div className='imagecontainer'>
            <img src="/images/14feb24.png" alt="shocked"/>
          </div>
          <p>I recently listened to an interview of Jonathan Ross (yes the guy who made the TPU for google). He talked about AI hardware and how speed is the thing that actually matters for these large AI models for deploying them for production.</p>
          <p>As a developer, experimenting with OpenAI API I realised how good these were on the localhost but when it comes to deploying them they do take time.</p>
          <p>I need to do more experiments on the recent open source models by Huggingface and Meta(Llama)</p>
          <p>considering on buying some hardware for deploying a large AI model on it, but first I need to figure out these open source models.</p>
          <p>Also I completely forgot about Andrej K. just left OpenAI this is huge for students like me 
            cause this guy knows a lot and his videos are just the best to learn about ML and AI. He tweeted that he 
            already started working on his videos. Apart from his videos I see a lot of people are excited for 
            his contributions on open source models, I mean he is very knowledgable but I think there a lot of anonymous
            brilliant people out there who can make similar or even better contributions (just saying might not make a huge difference).
          </p>
          <p>TODO <br/>
            § Spin up a basic gpt using Llama, Huggingface model and groq. <br/>
            § Look into AI hardware on the internet and see what people are doing on this. <br/>
          </p>
        </div>
      </main>

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/images/head_pic.png" alt="Vercel" className={styles.logo} />
        </a>
      </footer> */}
      

      <style jsx global>{`
        body {
          background-color: #17252A;
          font-family: Source Code Pro;
        }
        main {
          max-width: 42rem;
        }
        h3 {
          color: violet;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
