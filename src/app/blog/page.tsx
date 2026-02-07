import BlogSummary from "@/src/components/blog-summary";
import Divider from "@/src/components/divider";

export default function BlogPage() {
  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Blog</h1>
        <h3 className="font-serif">I've had thoughts in the past</h3>
      </div>

      <Divider />

      <div className="w-full flex flex-col gap-12">
        <BlogSummary
          title="Blog Coming Soon"
          date={new Date()}
          blurb="I have a lot of ideas for blog posts, but I haven't gotten around to writing any of them yet. Stay tuned!"
        />
      </div>
    </>
  );
}
