import SearchForm from "../components/searchForm";

export default function Home() {
  return (
    <>
      <div className="bg-pink-600">
        <section className="pink_container">
          <h1 className="heading">
            Pitch Your Startup, <br /> Connect With Entrepreneurs
          </h1>
          <p className="sub-heading !max-w-3xl">
            {" "}
            Submit Ideas, Votes on Pitches, and Get Noticed Virtual
            Competitions.{" "}
          </p>

          <SearchForm />
        </section>
      </div>
    </>
  );
}
