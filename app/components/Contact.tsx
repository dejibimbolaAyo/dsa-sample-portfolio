import type { FC } from "react";

const Contact: FC = () => (
  <section
    id="contact"
    className="py-32 bg-transparent flex items-center justify-center min-h-screen"
  >
    <div className="w-full max-w-lg mx-auto">
      <div className="backdrop-blur-md bg-white/10 border border-zinc-700 rounded-2xl shadow-xl p-10">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Get in Touch
        </h2>
        <form className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-white/20 border border-zinc-600 rounded-lg px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/30 transition"
              autoComplete="off"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-white/20 border border-zinc-600 rounded-lg px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/30 transition"
              autoComplete="off"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              className="w-full bg-white/20 border border-zinc-600 rounded-lg px-5 py-3 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:bg-white/30 transition"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-bold text-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg hover:from-cyan-500 hover:to-purple-600 transition"
          >
            Send Message
          </button>
        </form>
        <div className="mt-10 flex justify-center space-x-8">
          <a href="#" className="text-zinc-400 hover:text-cyan-400 transition">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="#" className="text-zinc-400 hover:text-cyan-400 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="#" className="text-zinc-400 hover:text-cyan-400 transition">
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
