/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SameAccountLogo from '../../assets/img_home_page/same-account-logo.svg';
import ImgExPost from '../../assets/img_home_page/img-ex-post.png';
import { theme } from '../../styles/theme';
import SameLikeLogo from '../../assets/img_home_page/same-like-logo.png';
import SameCommentLogo from '../../assets/img_home_page/same-comment-logo.png'
import SameSendLogo from '../../assets/img_home_page/same-send-logo.png'
import SamePostLogo from '../../assets/img_home_page/same-post-logo.png'

export default function HomePost(){

    const post = css`
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        border-radius: 20px;
        width: 470px;
        background: ${theme.glass.bgPost};
        box-shadow: ${theme.shadow.md};
        overflow: hidden;
    `;

    const headerCss = css`
        background: ${theme.glass.focusShadow};
        display: flex;
        align-items: center;
        padding: 12px 20px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    `;

    const avatarCss = css`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${theme.colors.textWhite};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        object-fit: cover;
    `;

    const imgCss = css`
        width: 70px;
    `

    const imgLogo = css`
        width: 230px;
        height: 70px;
        display: flex;
        gap: 7px;
    `

    const text = css`
        display: flex;
        text-align: centre;
        padding: 10px;
    `

    const backColor = css`
        box-shadow: ${theme.glass.focusShadow};
    `

      const postButton = css`
        position: fixed;
        right: 40px;
        bottom: 40px;
    `;

    return(
        <>
            <main css={post}>
                <section css={headerCss}>
                    <a href=""><img src={SameAccountLogo} alt="Account" css={avatarCss} /></a>
                    <h1>Text</h1>
                </section>
                <section>
                    <img src={ImgExPost} alt="Example Post Image" />
                </section>
                <section css={imgLogo}>
                    <article>
                        <a href=""><img src={SameLikeLogo} alt="Same Like Logo" /></a>  
                    </article>
                    <article>
                        <a href=""><img src={SameCommentLogo} alt="Same Comment Logo" /></a>
                    </article>
                    <article>
                        <a href=""><img src={SameSendLogo} alt="Same Send Logo" /></a>
                    </article>
                </section>
                <article css={text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit veritatis facere totam illum dignissimos enim tenetur, doloremque obcaecati dolore recusandae officiis exercitationem repellat natus sit illo quia deleniti assumenda eos!
                </article>


            </main>

            <article css={postButton}>
                <a href=""><img src={SamePostLogo} alt="Same Post Logo" /></a>
            </article>
        </>
    );
}