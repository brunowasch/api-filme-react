import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #03090F;
    width: 100%;

    h1 {
        text-align: center;
        margin: 4rem 0;
        color: #ffffff;
    }

    h2 {
        text-align: left;
        margin-top: 3rem;
        margin-bottom: 2rem;
        color: #ffffff;
    }
`;



export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem 2rem;

    .logo-grupo{
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    h1 {
        color: #ffffff;
        font-size: 2rem;
        margin: 0;
    }

    .search-form {
        display: flex;
        gap: 0.5rem;
    }

    .search-form input {
        padding: 0.5rem;
        border-radius: 10px;
        border: 2px solid #ffffff;
        background-color: transparent;
        color: white;
        font-size: 1rem;
        outline: none;
    }

    .search-form button {
        padding: 0.5rem 1rem;
        border-radius: 10px;
        background-color: #00bcd4;
        color: white;
        border: none;
        cursor: pointer;
        font-weight: bold;
        transition: background-color 0.3s;
    }

    .search-form button:hover {
        background-color: #0097a7;
    }
`;

export const Logo = styled.img`
    width: 60px;
    height: auto;
`;

export const MovieList = styled.ul`
    flex: 1;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    padding: 2rem 4rem;
    margin: 0;
`;


export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(10, 21, 32);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 180px;
        height: 270px;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }

    span {
        font-weight: bold;
        font-size: 1.2rem;
        color: #ffffff;
        text-align: center;
    }

    a {
        text-decoration: none;
        visibility: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transition: visibility 0.3s, opacity 0.3s ease;
        color: white;
        padding: 10px 20px;
        border-radius: 25px;
        text-align: center;
    }

    &:hover a {
        visibility: visible;
        opacity: 1;
    }

    &:hover img {
        filter: blur(5px);
    }
`;

export const Btn = styled.button`
    margin-top: 5px;
    padding: 0.7rem 2rem;
    border-radius: 15px;
    color: #212121;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 250ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.05);
    }

    &:focus {
        border-color: transparent;
    }

    &:active {
        transform: scale(1);
    }
`;

export const Select = styled.select`
    padding: 0.7rem;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 10px;
    color: #ffffff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #00bcd4;
    }

    option {
        background-color: #03090F;
        color: #ffffff;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    margin-top: 2rem;
    padding: 1.5rem 2rem;
    background-color: #021018;
    color: #00bcd4;
    text-align: center;

    p {
        margin: 0;
    }

    span {
        color: #ffffff;
    }
`;