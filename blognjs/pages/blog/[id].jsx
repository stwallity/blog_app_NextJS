import { useRouter } from "next/router";

const SinglePost = () => {
  return <div>Enter</div>;
};

export const getServerSideProps = async ({ query }) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
  const posts = await data.json();
  return {
    props: { posts },
  };
};

export default SinglePost;
