const teamMembers = [
  {
    name: "John Smith",
    role: "Chief Executive Officer",
    experience: "15+ years in IT leadership",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Sarah Johnson",
    role: "Chief Technology Officer",
    experience: "Cloud architecture expert",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Michael Davis",
    role: "Security Director",
    experience: "Cybersecurity specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  },
  {
    name: "Lisa Chen",
    role: "Project Manager",
    experience: "Digital transformation expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Niakazi</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in the IT industry, Niakazi has been at the forefront of technological innovation, helping businesses transform their operations through cutting-edge solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of certified professionals combines deep technical expertise with a thorough understanding of business needs to deliver solutions that drive real results.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office technology infrastructure" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h3>
          <p className="text-xl text-gray-600">Meet the professionals who make it all happen</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img 
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" 
              />
              <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
