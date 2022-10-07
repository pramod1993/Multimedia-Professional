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

export const contactus = styled.div`
    width: 50%;
    background: #ccc;
    margin: 50px 20px 0px;
    padding: 15px;
    box-shadow: 0px 0px 18px 0px #cccbcb;

    & .submit{
        padding: 6px 42px;
        margin-top: 30px;
    }

    & input{
        border:1px solid #ccc;
        border-radius: 0;

        &:focus{
            box-shadow: none;
            border: 1px solid #ccc;
            border-radius: 0;

        }
    }
    & textarea{
        border:1px solid #ccc;
        border-radius: 0;

        &:focus{
            box-shadow: none;
            border: 1px solid #ccc;
            border-radius: 0;

        }
    }

    & label{
        font-family: roboto;
        font-weight: 400;
    }
`;
export const map = styled.div`
    width: 50%;
    background: #ccc;
    margin: 50px 20px 0px;
    padding: 15px;
    box-shadow: 0px 0px 18px 0px #cccbcb;
    & .gmap_iframe{
        width:100%;
        height:100%;
    }
`;