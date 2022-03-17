import { useEffect, useMemo, useState } from "react";

// import thirdweb
import { useWeb3 } from "@3rdweb/hooks";

const App = () => {
  // Use the connectWallet hook thirdweb gives us.
  const { connectWallet, address, error, provider} = useWeb3();
  console.log("👋 Wallet", connectWallet)
  console.log("👋 Address:", address)
  console.log("👋 error:", error)
  console.log("👋 provider:", provider)

  // This is the case where the user hasn't connected their wallet
  // to your web app. Let them call connectWallet.
  if (!address) {
    return (
      <div className="landing">
        <h1>SurfnWorkDAO</h1>
          <p>The community for nomads/entreprenuers that love to shred</p>
          <button onClick={() => connectWallet("injected")} className="btn-primary">
            Connect your wallet</button>
      </div>
    );
  }
  // This is the case where we have the user's address
  // which means they've connected their wallet to our site!
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>);
}
export default App;
