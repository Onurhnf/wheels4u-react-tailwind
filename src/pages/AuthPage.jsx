import { Auth } from "@supabase/auth-ui-react";

import React from "react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../services/supabase.js";
import colors from "tailwindcss/colors.js";

function AuthPage() {
  console.log("az", ThemeSupa);

  return (
    <div className="grid h-screen grid-cols-2 items-center justify-center bg-stone-50 pb-32 ">
      <div className="flex h-screen flex-col items-center justify-center bg-emerald-300 ">
        <img className="p-52" src="./logo-light.png" alt="login" />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <Auth
          supabaseClient={supabase}
          localization={{
            variables: {
              forgotten_password: {
                button_label: "Reset Password",
                loading_button_label: "Sending...",
              },
            },
          }}
          appearance={{
            theme: ThemeSupa,

            variables: {
              default: {
                colors: {
                  defaultButtonBackground: colors.stone[100],
                  defaultButtonBorder: colors.stone[900],
                  defaultButtonText: colors.gray[700],
                  inputBorder: colors.stone[400],
                  inputBorderHover: colors.stone[600],
                  inputBorderFocus: colors.stone[800],
                  dividerBackground: colors.emerald[400],
                  messageText: colors.stone[900],
                  anchorTextColor: colors.stone[500],
                  inputText: colors.stone[900],
                  inputLabelText: colors.stone[500],
                  anchorTextHoverColor: colors.stone[900],
                  brandButtonText: colors.black,
                  brandAccent: colors.emerald[400],
                },
              },
            },
          }}
          providers={["google"]}
        />
      </div>
    </div>
  );
}

export default AuthPage;
