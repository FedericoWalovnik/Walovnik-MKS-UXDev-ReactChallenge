 import { createGlobalStyle } from "styled-components"
 import { device } from "../breakpoints"

 export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;

        @media ${device.lg} {
            font-size: 16px;
        } 

        @media ${device.md} {
            font-size: 14px;
        }

        @media ${device.sm} {
            font-size: 12px;
        }


    }
    
    #root{
        margin:0 auto;
    }
`