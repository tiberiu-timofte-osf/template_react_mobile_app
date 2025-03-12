import {useState, useEffect} from 'react';
import {getAccount} from '../helper/user';
import {IUserAccount} from '../redux/types';

export const useAccount = () => {
  const [account, setAccount] = useState<Partial<IUserAccount>>();
  const [shouldRefetch, refetch] = useState({});

  useEffect(() => {
    const fetchAccount = async () => {
      const acc = await getAccount();
      setAccount(acc);
    };
    fetchAccount();
  }, [shouldRefetch]);

  const updateAccount = async (
    acc: Partial<any> | Partial<any>,
  ) => {
    delete acc.Id;
    delete acc.Loyalty_Program_Member_CBN__pr;
    // const response = await updateUserAccount(acc);
    // if (response) {
    //   setAccount({...acc, ...account});
    //   return true;
    // }
    return false;
  };
  return {account, updateAccount, refetch};
};
