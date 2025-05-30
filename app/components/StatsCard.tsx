import { useEffect, useState } from "react";

export default function StatsCard() {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [joke, setJoke] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      setLoading(true);
      // GitHub repo count (replace 'octocat' with your username if desired)
      const github = fetch("https://api.github.com/users/dejibimbolaAyo")
        .then((res) => res.json())
        .then((data) => setRepoCount(data.public_repos));
      // Random programming joke
      const jokeApi = fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      )
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));
      await Promise.all([github, jokeApi]);
      setLoading(false);
    }
    fetchStats();
  }, []);

  if (loading)
    return (
      <div className="text-zinc-400 text-center my-8">Loading stats...</div>
    );

  return (
    <div className="bg-zinc-800 rounded-xl p-6 shadow text-center max-w-xl mx-auto my-8 border border-purple-400/20">
      <h3 className="text-lg font-bold text-purple-400 mb-2">Fun Stats</h3>
      <div className="flex flex-col gap-2 items-center">
        <div className="text-zinc-100 font-mono">
          GitHub Public Repos:{" "}
          <span className="text-cyan-400 font-bold">{repoCount ?? "-"}</span>
        </div>
        <div className="text-zinc-100 font-mono mt-2">
          Joke: <span className="text-cyan-300">{joke}</span>
        </div>
      </div>
    </div>
  );
}
