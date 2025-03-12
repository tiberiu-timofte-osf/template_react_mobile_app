import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Contact} from '@helper/types/user';

// Define the initial state using that type
const initialState: Contact = {
  FirstName: '',
  LastName: '',
  Email: '',
  Phone: '',
  L2S_Email_Opt_Out__c: false,
  L2S_SMS_Opt_Out__c: false,
  Name: '',
  Salutation: '',
  Type__c: 'L2S Consumer',
  attributes: {
    type: '',
    url: '',
  },
  MailingAddress: {
    city: '',
    country: '',
    postalCode: '',
    state: '',
    street: '',
  },
  L2S_WhatsApp_Opt_Out__c: false,
  L2S_Telemarketing_Opt_Out__c: false,
  L2S_Third_Party_Opt_Out__c: false,
  L2S_Direct_Mail_Opt_Out__c: false,
};

// Authorization slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state: Contact, action: PayloadAction<Contact>) => {
      return action.payload;
    },
  },
});

export const {setCurrentUser} = userSlice.actions;

export default userSlice.reducer;
