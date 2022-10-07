import styled from 'styled-components';

export const row = styled.div`
    display:flex;
    text-align: center;
`;
export const body = styled.div`
    text-align: left;
    padding: 10px;
    background: #87cc00;
    color: #fff;
    margin-top:15px;
    & a{
        color:#fff;
        text-decoration:none;
        font-size:18px;
    }
    & .heding{
        text-align:center;
    }
`;
export const body1 = styled.div`
    text-align: left;
    padding: 10px;
    background: #fd5308;
    color: #fff;
    margin-top:15px;
    & a{
        color:#fff;
        text-decoration:none;
        font-size:18px;

    }
    & .heding{
        text-align:center;
    }
`;
export const body2 = styled.div`
    text-align: left;
    padding: 10px;
    background: #00adef;
    color: #fff;
    margin-top:15px;
    & a{
        color:#fff;
        text-decoration:none;
        font-size:18px;

    }
    & .heding{
        text-align:center;
    }
`;
export const director = styled.div`
    background:#f4f4f4;
    margin: 50px 0;
    padding: 50px 0;
`;
export const megesImg = styled.div`
    width:40%;
    & img{
        width:100%;
    }
`;
export const megesBox = styled.div`
    padding:15px 10px;
    width:60%;
    position: relative;
`;

export const heding = styled.div`
    position: relative;
    & h2{
        text-align:center;
    }
`;

export const capIcon = styled.div`
    width: 370px;
    height: 3px;
    background: #fd5308;
    position: relative; 
    left: 22%;
    right: 22%;
    top: 19%;
    & svg{
        position: absolute;
        bottom: -8px;
        background: #f4f4f4;
        padding: 5px;
        width: 28px;
        height: 25px;
        left: 48%;
    }
`;
export const directorBody = styled.div`
    text-align:left;
    margin-top: 15px;
    & .view{
            background: #fd5308;
            color: #fff;
            outline: none;
            border: none;
            border-radius: 0;
            padding: 8px 30px;
            transition: all ease-out 0.2s;
            &:hover{
                box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
                transform: translate(0px, -10px);
                transition: all ease-out 0.2s;
            }
            }
    }
`;
export const about = styled.div`
    position:relative;
`;
export const abotIcom = styled.div`
    width: 119px;
    height: 2px;
    background: red;
    position: relative;
    left: 45%;
    & svg{
        position: absolute;
        bottom: -5px;
        left: 41%;
        background: #fff;
        padding: 2px 3px;
        width: 30px;
    }
`;
export const aboutbody = styled.div`
    text-align: center;
    justify-content: center;
    flex: auto;
    background: #efeded;
    margin: 50px 10px;
    padding: 10px;
    transition: all ease-out 0.2s;
    &:hover{
        box-shadow: 0 9px 8px #ccc;
        transition: all ease-out 0.2s;
    }
`;
export const jobicon = styled.div`
    width: 110px;
    height: 110px;
    border: 2px solid #fd5308;
    text-align: center;
    border-radius: 100%;
    line-height: 110px;
    position: relative;
    left: 30%;
    & svg{
        font-size:50px;
        color:#fd5308;
    }
`;
export const jobheding = styled.div`
    text-align:center;
    & h4{
        font-size: 18px;
        padding: 10px;
        margin: 0;

        &:hover{
        color:#fd5308;
    }
    }
    
`;
export const abouttext = styled.div`
    text-align: justify;
    & .view{
            background: #fd5308;
            color: #fff;
            outline: none;
            border: none;
            border-radius: 0;
            padding: 8px 30px;
            transition: all ease-out 0.2s;
            &:hover{
                box-shadow: 0px 6px 16px 0px rgba(0, 0, 0, 0.3);
                transform: translate(0px, -2px);
                transition: all ease-out 0.2s;
            }
            }

`;
export const medicalimg = styled.div`
    position:relative;
    & img{
        width:100%;
    }
`;
export const ourtem = styled.div`
    position: relative;
    background: #f5f5f5;
    margin: 50px 10px;
    overflow: hidden;
    padding: 10px 0 0px 0;

    & img{
        width:100%;
    }
`;
export const hovertext = styled.div`
    position: absolute;
    bottom: 0;
    background: #00000054;
    width: 100%;
    color: #fff;
    text-align: left;
    padding: 10px;
    
    & span{
        display:none;
        transition: all 0.5s ease 0s; 
        font-size: 14px;
         }
        &:hover span{
        display:block;
        transition: all 0.5s ease 0s;
        }
        & h6:hover{
            color:#fd5308;
        }
`;
export const testimonial = styled.div`
    position:relative;
    color:#fff;
`;
export const testimonialIcom = styled.div`
    width: 119px;
    height: 2px;
    background: #fff;
    position: relative;
    left: 45%;
    & svg{
        position: absolute;
        bottom: -5px;
        left: 41%;
        background: #ec0b0b;
        padding: 2px 3px;
        width: 30px;
    }
`;
export const testimobox = styled.div`
        background: #fd5308c9;
        margin: 50px 10px 0px 10px;
        padding: 10px;
`;
export const testimoheding = styled.div`
    display: flex;
    border-bottom: 2px solid #fff;
    padding: 0px 0px 10px;
`;
export const testimoimg = styled.div`

    & img{
        width: 80px;
        height: 80px;
        border-radius: 100%;
        border: 7px solid #fff;
        line-height:80px;
    }
`;
export const testimohed = styled.div`
    position: relative;
    top: 26px;
    left: 35px;
    color: #fff;

    & h6{
        font-size:18px;
    }
`;
export const testimotitle = styled.div`
    color:#fff;
    padding:10px 0px;
    text-align: left;
`;
export const publicover = styled.div`
    position:absolute;
    top: 0;

    & h4{
        background: #fd5308db;
        color: #fff;
        padding: 10px 20px;
        margin: 0;
    }

    & p{
        background: #002858ad;
        color: #fff;
        padding: 5px;
    }
`;
export const publicimg = styled.div`
    position:relative;

    & img{
        width:100%;
        transition: all 0.5s ease 0s;
    }

    /* &:hover{
        opacity: 0.6;
        transition: all 0.5s ease 0s;
    } */
`;
export const imgover = styled.div`
    position:absolute;
    background:#0000004f;
    top:0;
    bottom:0;
    left:0;
    right:0;
    opacity:0;
    transition: all 0.5s ease 0s;

    &:hover{
        opacity:1;
        transition: all 0.5s ease 0s;
    }
`;
export const imgbox = styled.div`
    width: 60%;
    border: 1px solid #ccc;

    & img{
        width:100%;
    }
`;

export const imgtext = styled.div`
    text-align: justify;
    padding: 10px;
`;

export const seachbox = styled.div`
    width: 40%;
`;

export const seachtext = styled.div`
    text-align:left;
    margin: 13px 11px;

    & h5{
       margin:0; 
    }
`;

export const bor = styled.div`
    width:50px;
    height:2px;
    background:#fd5308;
`;
export const searchbar = styled.div`
    position:relative;
    margin-top: 10px;

    & input{
        padding: 6px 36px 6px 10px;
        border-radius: 0;
        &:focus{
            border: 1px solid #ccc;
            box-shadow: none;
        }
    }

    & svg{
        position: absolute;
        right: 0px;
        top: 0px;
        background: #fd5308;
        width: 34px;
        height: 38px;
        padding: 8px;
        color: #fff;
        cursor: pointer;
    }
`;
export const post = styled.div`
    border-top: 1px solid #ccc;
    margin: 10px 0px;

    & p{
        margin: 4px 0px;
    }
`;