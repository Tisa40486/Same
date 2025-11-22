/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import SamePrimaryLogo from "../../assets/img_home_page/same-primary-logo.png";
import { theme } from "../../styles/theme";
import SameAccountLogo from "../../assets/img_home_page/same-account-logo.svg";

export default function HeaderHomePage(){

    const pageStyles = css`
        .home{
            min-height: 100dvh;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
            color: ${theme.colors.textWhite};
            font-size: ${theme.fontSize.sm};
            backdrop-filter: blur(4px);
            display: flex;
                justify-content: space-between;
                align-items: center;
            overflow: hidden;
        }
    `

    const imgCss = css`
        padding-top: 10px;
        width: 150px;
        padding-left: 20px;
        border-top-left-radius: 50px;
        border-top-right-radius: 35px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        display: flex;
        flex-direction : row;
        justify-content: space-bewteen;
    `

    const accountLogo = css`
    width: 50px;
    height: 50px;`

//     const headerSection = css`
//   background-color: ${theme.glass.bgHeader};
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   border-bottom-left-radius: 20px;
//   border-bottom-right-radius: 20px;
//   padding: 0 24px;
//   height: 70px;
// `

// const imgCss = css`
//   padding-top: 10px;
//   width: 150px;
//   padding-left: 20px;
//   border-top-left-radius: 50px;
//   border-top-right-radius: 35px;
//   border-bottom-left-radius: 0;
//   border-bottom-right-radius: 0;
// `

// const accountLogo = css`
//   width: 50px;
//   height: 50px;
// `
    
    return(
        <>
                <header className="home">
                    <nav>
                        <section style={{backgroundColor: theme.glass.bgHeader}}>
                            <img src={SamePrimaryLogo} alt="Same Primary Logo" css={imgCss} />
                            
                            <a href="#"><img src={SameAccountLogo} alt="Same Account Logo" css={accountLogo}/></a>
                        </section>
                    </nav>
                
            </header>

            {/* <section css={headerSection}>
  <img src={SamePrimaryLogo} alt="Same Primary Logo" css={imgCss} />
  <a href="#"><img src={SameAccountLogo} alt="Same Account Logo" css={accountLogo}/></a>
</section> */}
        </>   
    )
}

