import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import Headline from "#/components/Headline";
import Subheading from "#/components/Subheading";
import TextBlock from "#/components/TextBlock";
import blogs from "#/data/sai/blogs.json";

import styles from "./styles.module.scss";

type BlogPageProps = {
  params: {
    blog: string;
  };
};

const VideoEmbed = dynamic(
  () => import("#/components/VideoEmbed/VideoEmbed"),
  {
    ssr: false,
    loading: () => (
      <div className={styles.videoPlaceholder} aria-label="Loading video…" />
    ),
  },
);

export const dynamicParams = false;

export function generateStaticParams() {
  return blogs.map((entry) => ({
    blog: entry.id.toString(),
  }));
}

const BlogEntry = ({ params }: BlogPageProps) => {
  const blog = blogs.find(
    (entry) => entry.id.toString() === params.blog,
  );

  if (!blog) {
    notFound();
  }

  return (
    <div className={styles.blogPage}>
      <Headline text={blog.title} className={styles.headline} />
      <Subheading text={blog.date} className={styles.subheading} />
      <VideoEmbed
        VideoId={blog.videoId}
        title={blog.title}
        className={styles.videoEmbed}
      />
      <TextBlock className={styles.textBlock}>{blog.text}</TextBlock>
    </div>
  );
};

export default BlogEntry;
