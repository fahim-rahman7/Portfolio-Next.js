export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6 border-t border-gray-200 dark:border-[#1B153D]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          Get In <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300/80 max-w-md mx-auto text-sm">
          Whether you have a project in mind or just want to say hi, feel free to drop a message!
        </p>
      </div>

      <form className="p-8 rounded-2xl bg-white dark:bg-[#120E2E] border border-gray-200 dark:border-[#221B52] space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-purple-300 mb-2 uppercase tracking-wider">Your Name</label>
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1C1642] border border-gray-200 dark:border-[#2C2361] text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-purple-300 mb-2 uppercase tracking-wider">Your Email</label>
            <input 
              type="email" 
              placeholder="john@example.com" 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1C1642] border border-gray-200 dark:border-[#2C2361] text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-purple-300 mb-2 uppercase tracking-wider">Message</label>
          <textarea 
            rows="5" 
            placeholder="Tell me about your project..." 
            className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#1C1642] border border-gray-200 dark:border-[#2C2361] text-gray-900 dark:text-white focus:outline-none focus:border-purple-500 transition"
          ></textarea>
        </div>
        <button 
          type="button" 
          className="w-full py-4 bg-purple-600 text-white font-medium rounded-xl shadow-lg shadow-purple-600/30 hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}