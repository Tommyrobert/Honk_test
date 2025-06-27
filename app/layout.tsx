import type { Metadata } from 'next'
import './globals.css'
import "@solana/wallet-adapter-react-ui/styles.css";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import { cookies, headers } from 'next/headers' // added
import ContextProvider from '@/context'
import { Toaster } from '@/components/ui/toaster';
import { SolanaProvider } from "@/context/solanaWalletProvider";

export const metadata: Metadata = {
  title: 'Honk Bridge',
  description: 'Honk token bridge',
  generator: 'Blockchian dev',
  icons: {
    icon: '/image/favicon.png',
  }
}

// export default async function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   const headersObj = await headers();
//   const cookies = headersObj.get('cookie')
//   return (
//     <html lang="en">
//       <body>
//         <ContextProvider cookies={cookies}>
//           {children}
//         </ContextProvider>
//         <Toaster />
//       </body>
//     </html>
//   )
// }

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
        <SolanaProvider>
          <ContextProvider cookies={cookies}>
            {children}
          </ContextProvider>
        </SolanaProvider>
      </body>
    </html>
  );
}
