import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";


const Nav = (props) => {
    return (
        <div className={"container"}>
            <Header />
            <Main />
        </div>
    );
};
export default Nav;