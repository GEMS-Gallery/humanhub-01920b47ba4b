export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getBenefits' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getCompanyInfo' : IDL.Func(
        [],
        [
          IDL.Record({
            'mission' : IDL.Text,
            'name' : IDL.Text,
            'values' : IDL.Vec(IDL.Text),
          }),
        ],
        ['query'],
      ),
    'getFAQ' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'question' : IDL.Text, 'answer' : IDL.Text }))],
        ['query'],
      ),
    'getJobOpenings' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'title' : IDL.Text, 'description' : IDL.Text }))],
        ['query'],
      ),
    'getTestimonials' : IDL.Func(
        [],
        [
          IDL.Vec(
            IDL.Record({
              'name' : IDL.Text,
              'role' : IDL.Text,
              'quote' : IDL.Text,
            })
          ),
        ],
        ['query'],
      ),
    'submitContactForm' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Text],
        [IDL.Text],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
