import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'getBenefits' : ActorMethod<[], Array<string>>,
  'getCompanyInfo' : ActorMethod<
    [],
    { 'mission' : string, 'name' : string, 'values' : Array<string> }
  >,
  'getFAQ' : ActorMethod<[], Array<{ 'question' : string, 'answer' : string }>>,
  'getJobOpenings' : ActorMethod<
    [],
    Array<{ 'title' : string, 'description' : string }>
  >,
  'getTestimonials' : ActorMethod<
    [],
    Array<{ 'name' : string, 'role' : string, 'quote' : string }>
  >,
  'submitContactForm' : ActorMethod<[string, string, string], string>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
