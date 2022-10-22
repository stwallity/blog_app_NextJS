import { useRouter } from "next/router";
import Layout from "../components/layout";
const SinglePost = ({ post }) => {
  if (!post) return Router.push("/404");
  return (
    <>
      <Layout title={post.title} description={post.body}></Layout>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  // console.log(process.env.POSTS_URL);
  const data = await fetch(`${process.env.POSTS_URL}/posts/${query.id}`);
  const post = await data.json();
  return {
    props: { post },
  };
};

export default SinglePost;
