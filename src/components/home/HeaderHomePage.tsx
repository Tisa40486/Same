import { css, useTheme } from "@emotion/react";
import SamePrimaryLogo from "../../assets/img_home_page/same-primary-logo.png";
import { theme } from "../../styles/theme";

export default function HeaderHomePage(){

    const pageStyles = css`
        .home{
            min-height: 100dvh;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
            color: ${theme.colors.textWhite};
            background-color: ${theme.colors.bgPrimary};
            font-size: ${theme.fontSize.sm};
            backdrop-filter: blur(4px);
            overflow: hidden;
        }
    `
    
    return(
        <>
            <header className="home" style={{backgroundColor: theme.glass.bgHeader}}>
                <nav>
                    <section style={{backgroundColor: theme.colors.textWhite}}>
                        <img src={SamePrimaryLogo} alt="Same Primary Logo" />
                    </section>
                    
                </nav>
            </header>
            
        </>
    )

}

