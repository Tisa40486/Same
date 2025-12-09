/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SameAccountLogo from '../../assets/img_home_page/same-account-logo.svg';
import ImgExPost from '../../assets/img_home_page/img-ex-post.png';
import { theme } from '../../styles/theme';
import SameLikeLogo from '../../assets/img_home_page/same-like-logo.png';
import SameCommentLogo from '../../assets/img_home_page/same-comment-logo.png'
import SameSendLogo from '../../assets/img_home_page/same-send-logo.png'
import SamePostLogo from '../../assets/img_home_page/same-post-logo.png'
import { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string | null;
    content: string | null;
    likes_count: number | null;
    comments_count: number | null;
    userDaoId: number | null;
}

export default function HomePost(){

    const [posts, setPosts] = useState<Post[]>([]);

    const postCss = css`
    display: flex;
    flex-direction: column;
    width: 420px;                   /* réduit un peu */
    margin: 20px auto;              /* CENTRE la carte */
    border-radius: 20px;
    background: ${theme.glass.bgPost};
    box-shadow: ${theme.shadow.md};
    overflow: hidden;
    `;

    const headerCss = css`
        background: ${theme.glass.focusShadow};
        display: flex;
        align-items: center;
        padding: 12px 20px;
        gap: 12px;
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
        background: ${theme.glass.focusShadow};
        display: flex;
        align-items: center;
        padding: 12px 20px;
        gap: 12px;
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
        padding-bottom: 20px;
    `;

    async function fnGetPost(userId: string | null)
    {
        if(!userId) return [];

        try{
            const reponse = await fetch(`https://sameapi-e8dmf9f6a7h2gkbh.switzerlandnorth-01.azurewebsites.net/api/post/getallbyuser/${userId}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            })
            const data = await reponse.json();
            console.log(data);
            
            return data;

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        async function load() {
            const posts = await fnGetPost(userId);
            console.log("📌 Résultat API :", posts);
            setPosts(posts);
        }

        load();
    }, []);
  
    

    return(
        <>
           {posts.map((post) => (
                <main key={post.id} css={postCss}>
                    <section css={headerCss}>
                        <img src={SameAccountLogo} alt="Account" css={avatarCss} />
                        <h1>{post.title}</h1>
                    </section>

                    <section>
                        <img src={ImgExPost} alt="Post" />
                    </section>

                    <section css={imgLogo}>
                        <img src={SameLikeLogo} alt="Like" />
                        <img src={SameCommentLogo} alt="Comment" />
                        <img src={SameSendLogo} alt="Send" />
                    </section>

                    <article css={text}>
                        {post.content}
                    </article>
                </main>
            ))}

            <article css={postButton}>
                <img src={SamePostLogo} alt="Create Post" />
            </article>

        </>
    );
}