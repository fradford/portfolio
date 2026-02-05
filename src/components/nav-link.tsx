export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group text-l font-bold hover:text-ink-700 dark:hover:text-ink-300 transition-colors duration-250 w-fit"
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 h-0.5 bg-ink-700 dark:bg-ink-300" />
    </a>
  );
}
