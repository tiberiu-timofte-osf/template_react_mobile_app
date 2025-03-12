export interface IAuthResponse {
  code: string;
  sfdc_community_url: string;
  sfdc_community_id: string;
}

export interface ApiResponse<T> {
  totalSize: number;
  done: boolean;
  records: T[];
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
  instance_url: string;
  id: string;
  token_type: string;
  issued_at: string;
  signature: string;
  scope: string;
  sfdc_community_id: string;
  sfdc_community_url: string;
}
