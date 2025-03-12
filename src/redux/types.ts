export type StatusType = 'idle' | 'loading' | 'complete' | 'failed';
export interface IUserRegister {
  FirstName: string;
  LastName: string;
  ProfessionalTitle?: string;
  PersonBirthdate: string;
  BirthDate: string;
  Email: string;
  Phone: string;
  PhonePrefix: string;
  Password: string;
  agreeNewsletter?:boolean;
  PostalCode:string;
  Street:string;
  City:string;
  State:string;
}

export interface IUserAccount extends IUserRegister {
  id:string;
}

export interface IUser {
  uid?: string;
  displayName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  photoURL?: string | null;
}

export type UserTokenType = string | null;


// Define a type for the slice state
export interface AuthState {
  userToken: string | null;
  currentUser: IUser | null;
  registrationInfo: IUserRegister;
  status: StatusType;
  error: string | null;
  // loginResponse?: ILoginResponse;
  busy: boolean;
  signedIn?: boolean;
  welcomeEmail:string | null;
}

export interface IUserForgotPassword {
  email: string;
}

export interface ISignUpUserParams {
  email: string;
  password: string;
}

export interface FilterCriteria {
  storeName: string; // The name of the store to search for
  brandName: string; // The brand of the product to search for
  storeType: {
    inStore: boolean;
    online: boolean;
  };
  retailerCategory: {
    all: boolean;
    homeware: boolean;
    electronics: boolean;
    fashion: boolean;
  };
}
