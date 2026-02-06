import BlogSummary from "@/src/components/blog-summary";
import Divider from "@/src/components/divider";

export default function BlogPage() {
  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Blog</h1>
        <h3 className="font-serif">Some of my thoughts and writings</h3>
      </div>

      <Divider />

      <div className="w-full flex flex-col gap-12">
        <BlogSummary
          title="Blog Post 1"
          date={new Date("2025-05-12")}
          blurb="This is a summary of my first blog post. It gives a brief overview of the content and entices readers to click through and read more."
        />
        <BlogSummary
          title="Blog Post 2"
          date={new Date("2025-07-10")}
          blurb="This is a summary of my second blog post. It gives a brief overview of the content and entices readers to click through and read more."
        />
        <BlogSummary
          title="Blog Post 3"
          date={new Date("2025-09-15")}
          blurb="This is a summary of my third blog post. It gives a brief overview of the content and entices readers to click through and read more."
        />
      </div>
    </>
  );
}
