/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { theme } from "../../styles/theme"

export default function TagList(){
    
    const tagCss = css`
        display: flex;
        flex-direction: column;
        text-align: center;
        align-self: flex-start;
        justify-content: center;
    `

    const cardCss = css`
        background: white;
        box-shadow: ${theme.shadow.md};
        border-radius: 20px;
        padding: 16px 24px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        backdrop-filter: blur(12px);
        width: 100%;
        max-width: 260px;
        margin: 0 auto; 
    `

    const buttonsWrapperCss = css`
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 10px;
        align-items: center;
    `

    const groupMargin = css`
    margin-bottom: 400px;`

    const tagButtonCss = (bg: string) => css`
        padding: 10px 32px;
        border-radius: 999px;      /* forme pilule */
        border: none;
        background-color: ${bg};
        color: #ffffff;
        font-size: 1.15rem;
        font-weight: 500;
        cursor: pointer;
    `

    const titleCss = css`
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 12px;
        color: black;
    `;

    return(
        <section css={tagCss}>
            <div css={cardCss}>
                <article>
                    <h2 css={titleCss}>Tags</h2>
                    <section css={[buttonsWrapperCss, groupMargin]}>
                        <button css={tagButtonCss("#003a5c")}>School</button>
                        <button css={tagButtonCss("#a7b4c5")}>School</button>
                        <button css={tagButtonCss("#4b1324")}>School</button>
                        <button css={tagButtonCss("#6f3b4c")}>School</button>
                    </section>
                </article>
                <article css={buttonsWrapperCss}>
                    <button css={tagButtonCss("#a7b4c5")}>Notification</button>
                    <button css={tagButtonCss("#6f3b4c")}>Support</button>
                </article>
            </div> 
        </section>
    )
}
