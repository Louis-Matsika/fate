import Headline from "#/components/Headline";
import CallToAction from "#/components/CallToAction";
import Link from "next/link";

import blogs from "#/data/sai/blogs.json";

import styles from "./styles.module.scss";

const BlogPage = () => {
  return (
    <div className={styles.blogsPage}>
      <Headline text={"Blogs"} />
      <div className={styles.blogsList}>
        {[...blogs].reverse().map((blog) => (
          <div key={blog.id}>
            <CallToAction CTA={blog.title} link={`/blogs/${blog.id}`} className={styles.blogPost} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
