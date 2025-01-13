function About() {
  const timelineItems = [
    { year: "2015", title: "Foundation", description: "Established with a vision to transform industries" },
    { year: "2017", title: "Global Expansion", description: "Opened offices in 5 countries" },
    { year: "2019", title: "Tech Innovation", description: "Launched AI-powered solutions" },
    { year: "2021", title: "Industry Leader", description: "Recognized as industry pioneer" },
    { year: "2023", title: "Future Ready", description: "Pioneering next-gen technologies" }
  ];

  return (
    <section id="about" data-name="about" className="section">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-name="about-content">
            <h2 className="text-4xl font-bold mb-6">
              About Syncella
            </h2>
            <p className="text-gray-300 mb-8">
              Founded in 2015, Syncella Enterprises has been at the forefront of technological innovation, 
              delivering cutting-edge solutions to businesses worldwide. Our commitment to excellence and 
              innovation drives us to push boundaries and create transformative solutions.
            </p>
            <button className="button">
              Learn More
            </button>
          </div>

          <div data-name="timeline" className="space-y-8">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                data-name={`timeline-item-${index}`}
                className="card hover-scale"
              >
                <div className="flex items-start">
                  <div className="text-[#4A90E2] text-xl font-bold mr-4">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
