import Int "mo:base/Int";

import Text "mo:base/Text";

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

  // Query function to return company information
  public query func getCompanyInfo() : async {name: Text; mission: Text; values: [Text]} {
    companyInfo
  };
}
