const Home = () => {
  return (
    <section>
      <div className="hero bg-white p-8 rounded-lg text-center">
        <img src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png" alt="Batya Harush" className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Welcome to Batya Harush's Showcase</h1>
        <p className="text-lg">Dive into the world of a seasoned radio broadcaster and talented narrator.</p>
      </div>
      <div className="about mt-8">
        <h2 className="text-2xl font-bold mb-2">About Batya Harush</h2>
        <p>My name is Batya Harush, and I'm a broadcaster and presenter on Israel's leading radio stations: Radio Tel Aviv, 99FM, and Radio Darom. Get inspired by a variety of advertisements, promos, and programs.</p>
      </div>
      <div className="highlights mt-8">
        <h2 className="text-2xl font-bold mb-2">Highlights</h2>
        <p>Explore captivating voice and extensive repertoire through a curated selection of highlights and samples.</p>
      </div>
    </section>
  );
};

export default Home;
