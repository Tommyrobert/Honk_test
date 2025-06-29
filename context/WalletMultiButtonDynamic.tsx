"use client";

import dynamic from "next/dynamic";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { BaseWalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Wallet } from "lucide-react";

// ✅ Custom Labels
const CUSTOM_LABELS = {
  "no-wallet": "Connect Wallet", // Default state before selecting a wallet
  "has-wallet": "Connect", // After a wallet is selected
  "select-wallet": "Connect Wallet", // Default text when selecting a wallet
  "change-wallet": "Change Wallet",
  connecting: "Connecting...",
  "copy-address": "Copy Address",
  copied: "Copied!",
  disconnect: "Disconnect",
};

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

// ✅ Wrap `WalletMultiButton` and inject custom labels
export const CustomWalletButton = dynamic(
  () =>
    Promise.resolve(() => (
      <div className="wallet-wrapper hover:bg-accent-teal-darker text-black h-[40px]">
        <Wallet className="w-4 h-4 text-black" />
        <BaseWalletMultiButton
          labels={CUSTOM_LABELS}
          className="px-4 font-semibold rounded-full transition"
        />
      </div>
    )),
  { ssr: false }
);

export default WalletMultiButtonDynamic;
