// import { RevealOnScroll } from "../RevealOnScroll";

// export const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-5xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             {" "}
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
//               <h3 className="text-xl font-bold mb-2"> Real-Time Forum</h3>
//               <p className="text-gray-400 mb-4">
//                 SPA Forum: Real-Time Chat, Posts, Comments, 
//                 and Live User Interactions.
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Golang", "Javascript", "Html", "Css", "Docker"].map((tech, key) => (
//                   <span
//                     key={key}
//                     className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
//                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
//                     "
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between items-center">
//                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>
            // <div
            //   className="
            //   glass p-6 rounded-xl border border-white/10 
            //   hover:-translate-y-1 hover:border-blue-500/30
            //   hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            //   transition-all
            // "
            // >
            //   <h3 className="text-xl font-bold mb-2">NetCat Chat Server/Client</h3>
            //   <p className="text-gray-400 mb-4">
            //     Real-Time Group Messaging, Message History, 
            //     and Server Management via Terminal UI
            //   </p>
            //   <div className="flex flex-wrap gap-2 mb-4">
            //     {["Golang", "Docker"].map((tech, key) => (
            //       <span
            //         key={key}
            //         className="
            //           bg-blue-500/10 text-blue-500 py-1 px-3 
            //           rounded-full text-sm
            //           transition
            //           hover:bg-blue-500/20 hover:-translate-y-0.5
            //           hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
            //         "
            //       >
            //         {tech}
            //       </span>
            //     ))}
            //   </div>
            //   <div className="flex justify-between items-center">
            //     <a
            //       href="#"
            //       className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            //     >
            //       View Project →
            //     </a>
            //   </div>
            // </div>

//             <div
//               className="
//               glass p-6 rounded-xl border border-white/10 
//               hover:-translate-y-1 hover:border-blue-500/30
//               hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
//               transition-all
//             "
//             >
//               <h3 className="text-xl font-bold mb-2">Lem-in: Optimizing Ant Paths</h3>
//               <p className="text-gray-400 mb-4">
//                 Pathfinding for Ants through Multiple Rooms and Tunnels, 
//                 Visualized in 2D and 3D
//               </p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {["Golang", "Javascript", "Three.js", "Html", "Css", "Docker"].map(
//                   (tech) => (
//                     <span
//                       key={tech}
//                       className="
//                       bg-blue-500/10 text-blue-500 py-1 px-3 
//                       rounded-full text-sm
//                       transition
//                       hover:bg-blue-500/20 hover:-translate-y-0.5
//                       hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
//                     "
//                     >
//                       {tech}
//                     </span>
//                   )
//                 )}
//               </div>
// //               <div className="flex justify-between items-center">
// //                 <a
//                   href="#"
//                   className="text-blue-400 hover:text-blue-300 transition-colors my-4"
//                 >
//                   View Project →
//                 </a>
//               </div>
//             </div>

            // <div
            //   className="
            //   glass p-6 rounded-xl border border-white/10 
            //   hover:-translate-y-1 hover:border-blue-500/30
            //   hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
            //   transition-all
            // "
            // >
            //   <h3 className="text-xl font-bold mb-2">GraphQL Profile</h3>
            //   <p className="text-gray-400 mb-4">
            //     Profile page using GraphQL API, 
            //     displaying user data and statistics with dynamic graphs
            //   </p>
            //   <div className="flex flex-wrap gap-2 mb-4">
            //     {["Javascript", "GraphQL", "GitHub", "Html", "Css",].map((tech, key) => (
            //       <span
            //         key={key}
            //         className="
            //           bg-blue-500/10 text-blue-500 py-1 px-3 
            //           rounded-full text-sm
            //           transition
            //           hover:bg-blue-500/20 hover:-translate-y-0.5
            //           hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
            //         "
            //       >
            //         {tech}
            //       </span>
            //     ))}
            //   </div>
            //   <div className="flex justify-between items-center ">
            //     <a
            //       href="#"
            //       className="text-blue-400 hover:text-blue-300 transition-colors my-4"
            //     >
            //       View Project →
            //     </a>
            //   </div>
            // </div>
//           </div>
//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };



import { useState } from 'react';


export const Projects = () => {
  
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      {/* Projects content */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Smart-Road</h3>
            <p className="text-gray-400 mb-4">
            Intelligent simulation of traffic intersections without traffic lights for autonomous vehicles.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Rust", "Sdl2"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="https://github.com/mazlin-ismael/smart-road"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                View Project →
              </a>
            </div>
          </div>
          <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">NetCat Chat Server/Client</h3>
              <p className="text-gray-400 mb-4">
                Real-Time Group Messaging, Message History, 
                and Server Management via Terminal UI
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Golang", "Gocui", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/mazlin-ismael/net-cat"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
          </div>
          <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Lem-in: Optimizing Ant Paths</h3>
              <p className="text-gray-400 mb-4">
                Pathfinding for Ants through Multiple Rooms and Tunnels, 
                Visualized in 2D and 3D
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Golang", "Js/Three.js", "Html", "Css", "Docker"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
               <div className="flex justify-between items-center">
                 <a
                  href="https://github.com/mazlin-ismael/lem-in"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
          </div>
          <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">GraphQL Profile</h3>
              <p className="text-gray-400 mb-4">
                Profile page using GraphQL API, 
                displaying user data and statistics with dynamic graphs (GraphiQL Integration)
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Javascript", "Graph(i)QL", "GitHub", "Html", "Css",].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/mazlin-ismael/mazlin-ismael.github.io"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
        </div>
      </div>

    </section>
  );
};
