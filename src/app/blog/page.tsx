import BlogSummary from "@/src/components/blog-summary";
import Divider from "@/src/components/divider";
import prisma from "@/lib/prisma";

export default async function BlogPage() {
  const blogs = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      tags: true,
    },
  });

  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Blog</h1>
        <h3 className="font-serif">I've had thoughts in the past</h3>
      </div>

      <Divider />

      <div className="w-full flex flex-col gap-12">
        {blogs.map((blog) => (
          <BlogSummary
            key={blog.id}
            id={blog.id}
            title={blog.title}
            date={blog.createdAt}
            blurb={
              blog.body.slice(0, 200) + (blog.body.length > 200 ? "..." : "")
            }
            tags={blog.tags.map((tag) => tag.text)}
          />
        ))}
      </div>
    </>
  );
}
