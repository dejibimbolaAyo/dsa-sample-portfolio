import { useEffect, useState } from "react";

interface Quote {
  text: string;
  author: string;
}

export default function QuoteCard() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://dsa-basic-api.onrender.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load quote.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-zinc-400 text-center my-8">Loading quote...</div>
    );
  if (error)
    return <div className="text-red-400 text-center my-8">{error}</div>;
  if (!quote) return null;

  return (
    <div className="bg-zinc-800 rounded-xl p-6 shadow text-center max-w-xl mx-auto my-8 border border-cyan-400/20">
      <p className="text-xl italic text-cyan-300 mb-2">"{quote.text}"</p>
      <p className="text-zinc-400">— {quote.author}</p>
    </div>
  );
}
