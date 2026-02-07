import Matrix from "../components/matrix";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        <h1 className="font-title">Francis Radford</h1>
        <h3 className="font-serif">
          Software Developer &amp; Designer with experience building web and
          desktop applications across a variety of domains.
        </h3>
      </div>

      <Matrix />
    </>
  );
}
