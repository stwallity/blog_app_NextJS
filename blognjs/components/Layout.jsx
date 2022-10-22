import Head from "next/head";
import Link from "next/link";
const layout = ({
  title = "Blog on Next.js - Simple Version",
  description = "",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title} || ''</title>
        <link
          rel="shortcut icon"
          href="/blognjs/public/title.png"
          type="image/png"
        ></link>
      </Head>

      <header>
        <Link href="/">
          <a>Главная</a>
        </Link>
        <img src="/share-post.png" alt="Reload the page please"></img>
      </header>
      <div class="container">{children}</div>
      <footer>2022 &copy; Blog</footer>
    </>
  );
};

export default layout;
// adding <header></header> and <footer></footer>
