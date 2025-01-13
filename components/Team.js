function TeamMember({ name, role, image, socials }) {
  return (
    <div data-name="team-member" className="card hover-scale">
      <div className="relative mb-6">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-65 object-cover rounded"
        />
        <div className="absolute inset-0 bg-[#4A90E2]/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex space-x-4">
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#4A90E2] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-300">{role}</p>
    </div>
  );
}

function Team() {
  const team = [
    {
      name: "Nitin Gupta",
      role: "Founder & CEO",
      image: "/assets/nitin.jpg",
      socials: [
        {
          url: "#",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          )
        }
      ]
    },
    {
      name: "Arpita Gupta",
      role: "Director & Developer",
      image: "/assets/arpita.jpg",
      socials: [
        {
          url: "#",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          )
        }
      ]
    },
    {
      name: "OM Prakash",
      role: "Director & Designer",
      image: "/assets/om.jpg",
      socials: [
        {
          url: "#",
          icon: (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section id="team" data-name="team" className="section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Team
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Meet the innovators driving our success
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
