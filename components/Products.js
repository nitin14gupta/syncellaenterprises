function ProductCard({ image, title, description, features }) {
  return (
    <div data-name="product-card" className="card card-flip">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
        </div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        <ul className="text-gray-300 space-y-2 mt-auto">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-[#4A90E2] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Products() {
  const products = [
    {
      image: "https://via.placeholder.com/400x300",
      title: "Smart Logistics Dashboard",
      description: "AI-powered logistics management system",
      features: [
        "Real-time tracking",
        "Predictive analytics",
        "Automated reporting"
      ]
    },
    {
      image: "https://via.placeholder.com/400x300",
      title: "AI-powered CRM",
      description: "Intelligent customer relationship management",
      features: [
        "Customer insights",
        "Automated workflows",
        "Performance analytics"
      ]
    }
  ];

  return (
    <section id="products" data-name="products" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Products
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Innovative solutions designed to transform your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
