const layout = ({
  title = "Blog on Next.js - Simple Version",
  description = "",
}) => {
  return;
  <Head>
    <title>{title} || ''</title>
    <meta>name="description" content={description || "Blog on Next.js"}</meta>
    <meta>
      name='og:description' content={description || "Blog on Next.js"}
    </meta>
  </Head>;
};

export default layout;
// adding <header></header> and <footer></footer>
