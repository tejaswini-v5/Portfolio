'use client';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Hi, I'm Tejaswini Viswanath — a software engineer and data enthusiast passionate about building impactful tech. 
            With a Master's in Computer Science from Illinois Tech and two years of experience at ServiceNow, I've worked 
            across full-stack development, machine learning, and health informatics.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            I've led teams, mentored interns, and collaborated on projects that drive meaningful outcomes, especially in 
            the healthcare and AI spaces. I'm also deeply committed to empowering women in tech and enjoy connecting with 
            communities like SWE, AnitaB.org, and GDG Chicago.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently, I'm seeking full-time software engineering roles where I can continue learning, leading, and creating.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 