import React, { useEffect, useState } from "react";

const InstallPromptHandler = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {showInstallButton && (
        <button
          id="install-button"
          onClick={handleInstallClick}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6"
        >
          Install App
        </button>
      )}
    </div>
  );
};

export default InstallPromptHandler;
