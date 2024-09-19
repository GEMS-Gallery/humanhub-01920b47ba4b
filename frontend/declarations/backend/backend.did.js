export const idlFactory = ({ IDL }) => {
  return IDL.Service({
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
  });
};
export const init = ({ IDL }) => { return []; };
