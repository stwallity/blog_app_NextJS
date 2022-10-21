import Head from "next/head";
const layout = ({
  title = "Blog on Next.js - Simple Version",
  description = "",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title} || ''</title>

        <meta>
          name="description" content={description || "Blog on Next.js"}
        </meta>
        <meta>
          name='og:description' content={description || "Blog on Next.js"}
        </meta>
      </Head>
      <header>
        <img src="/share-post.png" alt="Reload the page please"></img>
        <Link href="/">
          <a>Главная</a>
        </Link>
      </header>
      <div class="container">{children}</div>
      <footer>2022 &copy; Blog</footer>
    </>
  );
};

export default Layout;
// adding <header></header> and <footer></footer>
