/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export default function TagList(){
    
    const tagCss = css`
        display: flex;
        flex-direction: column;
    `

    return(
        <section css={tagCss}>
            <article>
                <h2>Tags</h2>
                <button>School</button>
                <button>School</button>
                <button>School</button>
                <button>School</button>
                <button>School</button>
                <button>School</button>
            </article>
            <article>
                <button>Notification</button>
                <button>Support</button>
            </article>
        </section>
    )
}
