import Link from "next/link";

const BlogItem = ({ title, description, id }) => {
  //
  return (
    <div className="blog-item">
      <h6>{title}</h6>
      <p>{description}</p>
      <div className="text-align-right">
        <Link href="/blogjs/[id]" as={`/blognjs/${id}`}>
          <a>Прочитать</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
