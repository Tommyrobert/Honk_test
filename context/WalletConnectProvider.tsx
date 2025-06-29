"use client";

import { useMemo } from "react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  // LedgerWalletAdapter,
  PhantomWalletAdapter,
  // SolflareWalletAdapter,
  // TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

export const WalletConnectProvider = ({ children }: { children: any }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => {
    if (network === WalletAdapterNetwork.Devnet) {
      // return 'https://rpc.hellomoon.io/00f4178d-d782-4d0e-ac29-02706daa7be2'
      return "https://api.devnet.solana.com/";
    }
    return clusterApiUrl(network);
  }, [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // new SolflareWalletAdapter({ network }),
      // new TorusWalletAdapter(),
      // new LedgerWalletAdapter(),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
