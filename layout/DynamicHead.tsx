/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head"
import { FC } from "react"
import { HeadProps } from "../@types/head"

const DynamicHead: FC<HeadProps> = ({ title, description, children }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="description" content={description} />
    
            <link rel="icon" href="/favicon.ico" />
            <link rel='manifest' href='/manifest.json' /> 

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap" rel="stylesheet" /> 

            {children}
        </Head>
    )
}

export default DynamicHead;