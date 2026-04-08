const Videos = () => {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Video Narrations</h1>
      <p>Featuring works from Nivea, Clinique, Mey Eden, and more.</p>
      <div className="video-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        <img src="https://i.ytimg.com/vi/vKBOZtSOB-Y/sddefault.jpg" className="w-full h-auto" alt="Nivea" />
        <img src="https://i.ytimg.com/vi/mk56HdeJWM4/hqdefault.jpg" className="w-full h-auto" alt="Clinique" />
        <img src="https://i.ytimg.com/vi/z2mq4xyE3jo/hqdefault.jpg" className="w-full h-auto" alt="Mey Eden" />
        <img src="https://i.ytimg.com/vi/UzoCsd4u8dk/hqdefault.jpg" className="w-full h-auto" alt="Ice T" />
      </div>
    </section>
  );
};

export default Videos;
