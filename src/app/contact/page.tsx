import Divider from "@/src/components/divider";

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Let's Talk</h1>
        <h3 className="font-serif">I'd love to hear from you</h3>
      </div>

      <Divider />

      <div className="flex flex-col gap-4 items-start justify-start w-full">
        <p className="font-serif text-justify">
          If you'd like to get in touch, whether it's to discuss a potential job
          opportunity, collaborate on a project, or just say hi, feel free to
          reach out! You can find me on{" "}
          <a
            href="https://www.linkedin.com/in/francis-radford/"
            className="underline"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a href="https://github.com/fradford" className="underline">
            GitHub
          </a>
          , or you can send me an email at{" "}
          <a href="mailto:francis.radford@outlook.com" className="underline">
            francis.radford@outlook.com
          </a>
          .
        </p>
      </div>
    </>
  );
}
