import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";

const App = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Unity
      unityProvider={unityProvider}
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default App;
