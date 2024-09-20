import { blogPosts } from '../../../../posts'
import BlogPost from "./components/blog-post";

export default function Page({ params }) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id));

  return (
    <div>
      <BlogPost
        title={post.title}
        subtitle={post.subtitle}
        content={post.content}
        date={post.date}
      />
    </div>
  );
}
