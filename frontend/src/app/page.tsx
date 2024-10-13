import WebtoonList from "@/components/WebtoonList";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto my-5 px-10 md:px-5">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 capitalize text-center">
        The 5 Best Fantasy Manhwa You Must Read Now
      </h1>

      <p>
        Do we really need to convince you to read a fantasy manhwa? If you have
        read the title, you already know this blog has it all. Whether you are
        looking for a hunter like Solo Leveling’s Sung Jinwoo or an adventurous
        narrative like Omniscient Reader’s Viewpoint, the fantasy genre includes
        all. The fantasy manhwa genre has several sub-genres &ndash; the most
        appealing ones are ACTION, ROMANCE, and ADVENTURE. These genres will
        absolutely immerse you with their captivating narrative, stunning
        characters, and top-tier action. If you are new to manhwa or webtoon and
        don’t know where to begin, fantasy should be your go-to. Without further
        ado, here are the 5 best fantasy manhwa you should read now.
      </p>

      <WebtoonList />
    </main>
  );
}
