import styled from 'styled-components';

export const AboutHeder = styled.div`
    position: relative;
    height: 300px;
    overflow: hidden;
    & img{
        width: 100%;
    }
`;
export const over = styled.div`
        background: #0000006e;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
`;
export const overtext = styled.div`
    position: absolute;
    top: 15%;
    color: #fff;
    left: 15%;
`;
export const link = styled.div`

    & ul{
        padding: 0;
        margin: 0;
        display: flex;
    }
    & li{
        list-style:none;
        padding: 0px 10px;
    }
    & a{
        text-decoration: none;
        color: #fd5308;
    }
`;
export const row = styled.div`
    display:flex;
`;

export const aboutimg = styled.div`
    width: 70%;
    margin: 50px 10px 0px;

    & img{
        width:100%;
    }
`;
export const aboutimgtext = styled.div`
    text-align: justify;
    margin-top: 20px;
    font-size: 15px;
    font-family: roboto;
`;
export const abouttext = styled.div`
    width: 30%;
    margin: 50px 10px 0px;
`;
export const search = styled.div`
    position:relative;
    & input{
        padding: 6px 75px 6px 11px;
        width: 100%;
        border-radius: 0;        
        
        &:focus{
            border: 1px solid #ccc;
            box-shadow: none;
        }
    }
`;
export const abouticon = styled.div`
    background:#fd5308;
    color:#fff;
    position: absolute;
    right: 0;
    top: 0;
    padding: 7px 13px;
`;
export const Recentbox = styled.div`
    margin-top: 30px;
`;
export const Recent = styled.div`
    
    font-family: roboto;
`;
export const bor = styled.div`
    width: 100%;
    height: 1px;
    background: #ccc;
`;
export const bor1 = styled.div`
    width: 60px;
    height: 3px;
    background: #fd5308;
    position: relative;
    top: -2px;
`;
export const postbox = styled.div`
        border-bottom: 1px solid #ccc;
        margin: 18px 0px;
`;
export const postimg = styled.div`
    width: 40%;

    & img{
        width:100%;
    }
`;
export const posttext = styled.div`
        padding: 0px 12px;

        & a{
            font-size: 15px;
            text-decoration: none;
            color: #000;
            font-family: roboto;

            &:hover{
                color:#0a58ca;
            }
        }
        & h6 svg{
            color:#fd5308;
        }
`;
export const capIcon = styled.div`
    font-size: 12px;
    font-family: roboto;

`;