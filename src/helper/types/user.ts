interface Attributes {
  type: string;
  url: string;
}

export interface Record {
  attributes: Attributes;
  AccountId: string;
  Id: string;
  Email: string;
  ContactId: string;
  Contact: Contact;
}

interface MailingAddress {
  city: string;
  country: string;
  postalCode: string;
  street: string;
  state?: string;
  geocodeAccuracy?: number;
  longitude?: number;
  latitude?: number;
}

export interface Contact {
  attributes: Attributes;
  Name: string;
  FirstName: string;
  LastName: string;
  Salutation: string;
  Phone: string;
  Email: string;
  MailingAddress: MailingAddress;
  L2S_Email_Opt_Out__c: boolean;
  L2S_SMS_Opt_Out__c: boolean;
  L2S_WhatsApp_Opt_Out__c: boolean;
  L2S_Telemarketing_Opt_Out__c: boolean;
  L2S_Third_Party_Opt_Out__c: boolean;
  L2S_Direct_Mail_Opt_Out__c: boolean;
  Type__c: 'L2S Consumer' | 'L2S Business';
}
