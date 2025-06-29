import type { Metadata } from 'next'
import './globals.css'
import "@solana/wallet-adapter-react-ui/styles.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { cookies, headers } from 'next/headers' // added
import ContextProvider from '@/context'
import { Toaster } from '@/components/ui/toaster';
import { SolanaProvider } from "@/context/solanaWalletProvider";
// import { createNetworkConfig, SuiClientProvider, WalletProvider as SuiWalletProvider/*, lightTheme*/, DynamicTheme } from "@mysten/dapp-kit";
import { WalletConnectProvider } from '@/context/WalletConnectProvider';

export const metadata: Metadata = {
  title: 'Honk Bridge',
  description: 'Honk token bridge',
  generator: 'Blockchian dev',
  icons: {
    icon: '/image/favicon.png',
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersObj = await headers();
  const cookies = headersObj.get('cookie')
  return (
    <html>
      <body>
        <WalletConnectProvider>
          {/* <ContextProvider cookies={cookies}> */}
            {children}
          {/* </ContextProvider> */}
        </WalletConnectProvider>
      </body>
    </html>
  );
}
