import Func "mo:base/Func";
import Int "mo:base/Int";

import Text "mo:base/Text";
import Array "mo:base/Array";

actor {
  // Company information
  let companyInfo = {
    name = "TechInnovate Solutions";
    mission = "Empowering innovation through people-centric technology solutions.";
    values = [
      "Integrity: We uphold the highest ethical standards in all our actions.",
      "Innovation: We continuously seek new and better ways to solve problems.",
      "Collaboration: We believe in the power of teamwork and diverse perspectives.",
      "Excellence: We strive for excellence in everything we do.",
      "Empathy: We prioritize understanding and supporting our employees and clients."
    ];
  };

  // Job openings
  var jobOpenings = [
    {title = "Software Engineer"; description = "Develop cutting-edge software solutions."},
    {title = "UX Designer"; description = "Create intuitive and engaging user experiences."},
    {title = "Data Scientist"; description = "Analyze complex data sets to drive business decisions."}
  ];

  // Employee benefits
  let benefits = [
    "Competitive salary",
    "Health and dental insurance",
    "401(k) matching",
    "Flexible work hours",
    "Remote work options",
    "Professional development budget"
  ];

  // Employee testimonials
  let testimonials = [
    {name = "John Doe"; role = "Senior Developer"; quote = "Working here has been an amazing journey of growth and innovation."},
    {name = "Jane Smith"; role = "Product Manager"; quote = "The collaborative culture here is unparalleled. I love my team!"}
  ];

  // FAQ
  let faq = [
    {question = "What is the hiring process like?"; answer = "Our hiring process typically involves an initial screening, technical interview, and culture fit interview."},
    {question = "Do you offer internship programs?"; answer = "Yes, we offer summer internships for students in relevant fields."}
  ];

  // Query function to return company information
  public query func getCompanyInfo() : async {name: Text; mission: Text; values: [Text]} {
    companyInfo
  };

  // Query function to return job openings
  public query func getJobOpenings() : async [{title: Text; description: Text}] {
    jobOpenings
  };

  // Query function to return benefits
  public query func getBenefits() : async [Text] {
    benefits
  };

  // Query function to return testimonials
  public query func getTestimonials() : async [{name: Text; role: Text; quote: Text}] {
    testimonials
  };

  // Query function to return FAQ
  public query func getFAQ() : async [{question: Text; answer: Text}] {
    faq
  };

  // Function to submit a contact form
  public func submitContactForm(name: Text, email: Text, message: Text) : async Text {
    // In a real application, you would process and store this information
    "Thank you for your message, " # name # ". We will get back to you soon!"
  };
}
