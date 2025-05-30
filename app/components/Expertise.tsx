import type { FC } from "react";

const Expertise: FC = () => (
  <section id="expertise" className="py-32 bg-[#232127]">
    <h2 className="text-5xl font-bold text-center mb-16 text-white">
      My Expertise
    </h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full max-w-5xl border border-gray-500 rounded overflow-hidden">
        {/* Card 1 */}
        <div className="flex flex-col items-start p-8 border-b md:border-b-0 md:border-r border-gray-500 bg-[#232127] min-h-[260px]">
          <div className="mb-4">
            <i className="fas fa-desktop text-2xl text-white"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">
            <span className="text-pink-400 font-mono">Software</span>{" "}
            <span className="text-white">Development</span>
          </h3>
          <p className="font-mono text-gray-200 text-sm whitespace-pre-line">
            Experienced in both functional and OOP: Dart, Python, Java,
            JavaScript, TypeScript.
          </p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-start p-8 border-b md:border-b-0 md:border-r border-gray-500 bg-[#232127] min-h-[260px]">
          <div className="mb-4">
            <i className="fas fa-atom text-2xl text-white"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">
            <span className="text-blue-400 font-mono">Frontend Dev</span>{" "}
            <span className="text-white">React, NextJS</span>
          </h3>
          <p className="font-mono text-gray-200 text-sm whitespace-pre-line">
            Passionate about UI/UX. Over 5 years of development experience in
            HTML, CSS, JS, React and NextJS frameworks.
          </p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-start p-8 bg-[#232127] min-h-[260px]">
          <div className="mb-4">
            <i className="fab fa-android text-2xl text-white"></i>
          </div>
          <h3 className="text-lg font-bold mb-2">
            <span className="text-orange-400 font-mono">Flutter Dev</span>{" "}
            <span className="text-white">Android, iOS</span>
          </h3>
          <p className="font-mono text-gray-200 text-sm whitespace-pre-line">
            Skilled in developing hybrid mobile apps and cross-platform
            solutions using the Flutter framework.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Expertise;
