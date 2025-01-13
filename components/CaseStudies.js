function CaseStudy({ title, client, result, stats }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div data-name="case-study" className="card">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold">{title}</h3>
        <svg 
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4">
          <p className="text-gray-300">
            <span className="font-bold">Client:</span> {client}
          </p>
          <p className="text-gray-300">
            <span className="font-bold">Result:</span> {result}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-[#1A1A1A]/50 rounded">
                <div className="text-2xl font-bold text-[#4A90E2]">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function CaseStudies() {
  const caseStudies = [
    {
      title: "Global Supply Chain Optimization",
      client: "Fortune 500 Retailer",
      result: "40% reduction in logistics costs",
      stats: [
        { value: "40%", label: "Cost Reduction" },
        { value: "2x", label: "Efficiency Increase" }
      ]
    },
    {
      title: "AI-Driven Customer Service",
      client: "Tech Startup",
      result: "85% improvement in response time",
      stats: [
        { value: "85%", label: "Faster Response" },
        { value: "95%", label: "Customer Satisfaction" }
      ]
    },
    {
      title: "Digital Transformation",
      client: "Manufacturing Giant",
      result: "300% ROI in first year",
      stats: [
        { value: "300%", label: "ROI" },
        { value: "50%", label: "Process Automation" }
      ]
    }
  ];

  return (
    <section id="case-studies" data-name="case-studies" className="section bg-[#1A1A1A]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Case Studies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real results from our innovative solutions
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
}
