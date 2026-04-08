const Contact = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Batya Harush</h1>
      <p>Feel free to reach out for inquiries and collaborations.</p>
      <form className="space-y-4 mt-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold">Name</label>
          <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-bold">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs font-bold">Message</label>
          <textarea id="message" className="w-full p-2 border border-gray-300 rounded"></textarea>
        </div>
        <button type="submit" className="bg-accent text-white py-2 px-4 rounded">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
