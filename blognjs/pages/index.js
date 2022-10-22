import BlogItem from "../components/BlogItem";
import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>Интересный блог</h1>
      <div class="posts">
        {posts.map((post) => {
          <BlogItem
            key={post.id}
            title={post.title}
            description={post.description}
            id={post.id}
          ></BlogItem>;
        })}
      </div>
    </Layout>
  );
}

//taking from server
//server requests
//props -> destr -> posts
//fetch from jsonplaceholder
export const getServerSideProps = async () => {
  // console.log(process.env.POSTS_URL);
  const data = await fetch(`${process.env.POSTS_URL}/posts`);
  const posts = await data.json();
  return {
    props: { posts },
  };
};
