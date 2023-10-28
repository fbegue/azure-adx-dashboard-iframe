import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MsalProvider } from "@azure/msal-react";
import { AuthComponent, msalInstance } from "./auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
let version = "0.0.1"
root.render(
    <React.StrictMode>
        version: {version}
        <MsalProvider instance={msalInstance}>
            <AuthComponent />
        </MsalProvider>
    </React.StrictMode>
);
