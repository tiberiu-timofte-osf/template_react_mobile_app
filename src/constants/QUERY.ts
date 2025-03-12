const QUERY = {
  ACCOUNT_DETAILS:
    '/services/data/v60.0/query/?q=SELECT Id, AccountId, Email, ContactId, Contact.Name, Contact.FirstName, Contact.LastName, Contact.Salutation, Contact.Phone, Contact.Email, Contact.MailingAddress, Contact.L2S_Email_Opt_Out__c, Contact.L2S_SMS_Opt_Out__c, Contact.L2S_WhatsApp_Opt_Out__c, Contact.L2S_Telemarketing_Opt_Out__c, Contact.L2S_Third_Party_Opt_Out__c, Contact.L2S_Direct_Mail_Opt_Out__c, Contact.Type__c FROM User',
};
export default QUERY;
