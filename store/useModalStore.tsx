import { ReactChild } from 'react';
import create from 'zustand';

type ModalStoreType = {
  walletConnectModal: boolean;
  descAddModal: boolean;
  wrongNetworkModal: boolean;
  alertModal: {
    open: boolean;
    title: string;
    children?: ReactChild;
  };
  alert: (title: string, children?: ReactChild) => void;
};

const useModalStore = create<ModalStoreType>((set, get) => ({
  walletConnectModal: false,
  descAddModal: false,
  wrongNetworkModal: false,
  alertModal: {
    open: false,
    title: '',
  },
  alert: (title: string, children?: ReactChild) => {
    set(() => ({ alertModal: { open: true, title, children } }));
  },
}));

export default useModalStore;