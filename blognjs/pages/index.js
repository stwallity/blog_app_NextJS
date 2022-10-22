import BlogItem from "../components/BlogItem";
import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <h1>Интересный блог</h1>
      <div class="posts">
        {posts.map((post) => {
          <BlogItem
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
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  const posts = await data.json();
  return {
    props: { posts },
  };
};
