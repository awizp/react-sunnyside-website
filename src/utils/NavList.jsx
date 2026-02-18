const NavList = ({ styleEl }) => {

    // destructuring the styles from props,
    const { listStyle, itemStyle, btnStyle } = styleEl;

    return (
        <ul className={listStyle}>
            <li className={itemStyle}>About</li>
            <li className={itemStyle}>Services</li>
            <li className={itemStyle}>Projects</li>
            <li className={btnStyle}>Contact</li>
        </ul>
    );
};

export default NavList;