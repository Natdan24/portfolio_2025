const Projects = () => {
    return (
      <section className="bg-black text-white py-20 px-6" id="projects">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-500 mb-12">Projects</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-pink-500 transition">
              <h3 className="text-2xl font-semibold mb-2">AI Chatbot</h3>
              <p className="text-gray-300 mb-4">A simple chatbot powered by GPT-style model with a clean UI.</p>
              <button className="text-pink-400 hover:underline">View Project</button>
            </div>
  
            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-pink-500 transition">
              <h3 className="text-2xl font-semibold mb-2">Portfolio Website</h3>
              <p className="text-gray-300 mb-4">This very website – built with React, Tailwind, and Vite!</p>
              <button className="text-pink-400 hover:underline">View Project</button>
            </div>
  
            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-pink-500 transition">
              <h3 className="text-2xl font-semibold mb-2">Fraud Detection</h3>
              <p className="text-gray-300 mb-4">A real-time fraud detection pipeline using Python and Kafka.</p>
              <button className="text-pink-400 hover:underline">View Project</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  