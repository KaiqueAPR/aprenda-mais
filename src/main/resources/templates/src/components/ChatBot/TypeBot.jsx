import React, { useEffect } from 'react';

const Typebot = () => {
    useEffect(() => {
        const typebotInitScript = document.createElement("script");
        typebotInitScript.type = "module";
        typebotInitScript.innerHTML = `
      import Typebot from 'https://assets.toolzz.com.br/public/chat/web.js';
      
      Typebot.initBubble({
        typebot: "aprendamais",
        apiHost: "https://bots-viewer.toolzz.ai",
        theme: { button: { backgroundColor: "#9532e2" } },
      });
    `;
        document.body.appendChild(typebotInitScript);

        return () => {
            document.body.removeChild(typebotInitScript);
        };
    }, []);

    return <div id="typebot-container"></div>;
};

export default Typebot;