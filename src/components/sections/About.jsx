import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import cvJpg from "../../assets/cv.jpg"; // Miniature du CV
import cvPdf from "../../assets/cv.pdf"; // Image agrandie du CV

export const About = () => {
  const fullStacks = ["Golang", "Rust", "Python", "Ruby", "Ruby on Rails", "PHP", "SQLite", "MySQL", "GraphQL", "Tailwind",
    "Bootstrap",
    "Html",
    "Css", "Python",
  ];

  const aiSkills = ["Numpy", "Pandas", "Matplotlib", "Plotly", "Scikit-learn", "Keras", "Nltk", "SpaCy"]

  const toolsSkills = ["Docker", "VirtualBox", "Gitea", "Ngrok", "Github", "Linux", "VsCode", "Anaconda", "Jupyter Notebook"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);


  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            {/* <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> AI</h3>
                <div className="flex flex-wrap gap-2">
                  {aiSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {toolsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Full-Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {fullStacks.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center"> CV</h3>
                <div className="flex justify-center">
                  <img
                    src={cvJpg}
                    alt="Aperçu du CV"
                    className="w-28 cursor-pointer rounded-md hover:opacity-80 transition object-cover"
                    onClick={toggleModal}
                  />
                </div>

                <div className="flex justify-center mt-4">
                  <a
                    href={cvPdf}
                    download="CV-Ismael.pdf"
                    className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
                  >
                    Télécharger le CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-xl relative w-11/12 md:w-8/12 max-w-2xl">
            {/* Bouton Fermer */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            {/* Image agrandie du CV */}
            <img
              src={cvJpg}
              alt="CV Agrandi"
              className="w-full h-auto object-contain rounded-lg max-h-[80vh]"
            />

            {/* Bouton Télécharger */}
            <div className="text-center mt-4">
              <a
                href={cvPdf}
                download="CV-Ismael.pdf"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition"
              >
                Télécharger le CV
              </a>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};



