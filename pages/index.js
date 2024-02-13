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
          Lifelong student
        </h2>

        <div className={styles.description}>
          <h3>Documentation</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. In arcu cursus euismod quis viverra. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Elit duis tristique sollicitudin nibh. Curabitur vitae nunc sed velit dignissim sodales ut. Nunc eget lorem dolor sed. Scelerisque viverra mauris in aliquam sem fringilla ut. Molestie at elementum eu facilisis sed odio morbi quis commodo. Erat nam at lectus urna duis convallis convallis tellus id. Adipiscing bibendum est ultricies integer quis.

Id nibh tortor id aliquet lectus. Urna nunc id cursus metus. Risus pretium quam vulputate dignissim suspendisse. Semper feugiat nibh sed pulvinar. Proin sagittis nisl rhoncus mattis rhoncus urna. Tincidunt praesent semper feugiat nibh sed pulvinar. Cursus turpis massa tincidunt dui. Nam at lectus urna duis convallis convallis tellus. Sed turpis tincidunt id aliquet risus feugiat. Sollicitudin ac orci phasellus egestas tellus rutrum. Quisque non tellus orci ac auctor augue mauris augue. Vitae tempus quam pellentesque nec nam aliquam sem et. Cursus sit amet dictum sit amet justo donec. Amet mattis vulputate enim nulla.

Feugiat scelerisque varius morbi enim nunc faucibus a. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Pellentesque habitant morbi tristique senectus et netus et. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Urna molestie at elementum eu facilisis sed. Lacus vestibulum sed arcu non odio euismod. Egestas sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet mattis vulputate enim. Sit amet purus gravida quis blandit turpis cursus in. Sed odio morbi quis commodo odio aenean sed adipiscing diam. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Ullamcorper a lacus vestibulum sed.

Ac turpis egestas integer eget aliquet nibh. Viverra tellus in hac habitasse. Elit at imperdiet dui accumsan sit amet nulla. Curabitur vitae nunc sed velit. Ultrices neque ornare aenean euismod elementum. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Tellus in metus vulputate eu scelerisque felis imperdiet. Est ante in nibh mauris cursus mattis molestie. Auctor urna nunc id cursus metus aliquam eleifend. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Mauris vitae ultricies leo integer malesuada nunc. Non curabitur gravida arcu ac. Rutrum quisque non tellus orci ac auctor. Viverra justo nec ultrices dui sapien. Elit duis tristique sollicitudin nibh sit amet.

In dictum non consectetur a erat nam at lectus urna. Massa placerat duis ultricies lacus sed turpis tincidunt id. Eget magna fermentum iaculis eu non diam phasellus. Cursus mattis molestie a iaculis at erat pellentesque. Urna cursus eget nunc scelerisque. Sed tempus urna et pharetra pharetra massa massa ultricies. Mollis aliquam ut porttitor leo. Malesuada nunc vel risus commodo. Cras sed felis eget velit. Egestas congue quisque egestas diam in. Lectus quam id leo in vitae. Eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor. Sapien pellentesque habitant morbi tristique senectus et netus.
          </p>
          <img src="/images/anime.png" alt="Description of the image"/>
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
          font-family: Source Code Pro
        }
        main {
          width: 70%
        }
        h3 {
          color: violet
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
}
