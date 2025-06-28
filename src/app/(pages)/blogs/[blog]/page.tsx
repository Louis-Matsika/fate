"use client";
import { useParams } from "next/navigation";

import blogs from "#/data/sai/blogs.json";
import Headline from "#/components/Headline";
import Subheading from "#/components/Subheading";
import TextBlock from "#/components/TextBlock";
import styles from "./styles.module.scss";

const SystemsThinking = () => {
  const params = useParams();
  const blogId = Number(typeof params?.blog === "string" ? params.blog : "");
  const blog = blogs[blogId]

  return (
    <div className={styles.blogPage}>
      <Headline text={blog.title} className={styles.headline} />
      <Subheading text={blog.date} className={styles.subheading} />
      <TextBlock>{blog.text}</TextBlock>
    </div>
  );
};

export default SystemsThinking;
