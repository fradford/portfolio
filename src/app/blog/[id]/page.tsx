import prisma from "@/lib/prisma";
import Divider from "@/src/components/divider";
import Tag from "@/src/components/tag";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const post = await prisma.post.findUnique({
    where: {
      id: Number((await params).id),
    },
    include: {
      tags: true,
    },
  });
  return (
    <>
      <div className="flex flex-col gap-1 items-start justify-start w-full">
        <h1 className="font-title">{post?.title}</h1>
        <p className="font-serif">
          {post?.createdAt.toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="flex flex-row flex-wrap gap-2 mt-2">
          {post?.tags.map((tag) => (
            <Tag key={tag.id} text={tag.text} />
          ))}
        </div>
      </div>
      <Divider />

      <div className="w-full flex flex-col gap-12">
        {post?.body.split("\n").map((paragraph, idx) => (
          <p className="font-serif text-justify" key={idx}>
            {paragraph}
          </p>
        ))}
      </div>
    </>
  );
}
