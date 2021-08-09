import styled  from "@emotion/styled";

export const Boton = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40% , #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    cursor: pointer;
    border: 2px solid black;
    transition : background-size .8s ease;

    &:hover{
        cursor: pointer;
        background-size: 400px;
    }
`

export const Contenedor = styled.div`
    display: flex;
    align-items: center;
    padding-top: 5rem;
    flex-direction: column;
`;

export const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    font-size: 16px;
    @media (min-width : 992px){
        margin-top: 15rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size:10rem;
            color:black;
            position: absolute;
            left: -1rem;
            top:-3rem
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        columns: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`;