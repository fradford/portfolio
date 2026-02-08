import Divider from "./divider";

export default function Footer() {
  return (
    <footer className="max-w-(--max-content-width) mx-auto w-full mt-12 mb-4 flex flex-col items-center gap-2">
      <Divider />

      <div className="flex flex-row flex-wrap gap-4">
        <a
          href="https://www.linkedin.com/in/francis-radford/"
          className="underline text-sm"
        >
          LinkedIn
        </a>
        <a href="https://github.com/fradford" className="underline text-sm">
          GitHub
        </a>
      </div>

      <div className="flex flex-col items-center">
        {/* <p className="text-caption">Sunrise, Parabellum.</p> */}
        <p className="text-caption">
          © {new Date().getFullYear()} Francis Radford
        </p>
      </div>
    </footer>
  );
}
