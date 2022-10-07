import styled from 'styled-components';

export const row = styled.div`
    display:flex;
`;
export const footer = styled.div`
    background:#003a6a;
    margin-top: 50px;
`;
export const footerbox = styled.div`
    width: 33.333%;
    margin: 30px 10px;
`;
export const footerheding = styled.div`
    text-align:left;
    
    & h6{
        color:#fff;
    }
`;
export const footerlink = styled.div`
    text-align:left;

    & ul{
        margin:10px 0px;
        padding:0;
    }

    & li{
        list-style: none;
        border-top: 1px dotted #fff;
        padding: 6px 0;

    }
    & a{
        color:#72acdc;
        text-decoration: none;
        font-size: 14px;

        &:hover{
            color: #fd5308;
        }
    }
`;
export const bor = styled.div`
    width:60px;
    height:3px;
    background:#fd5308;
`;