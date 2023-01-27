import { NavLink } from "react-router-dom";
// import "./NavItem.css";

const NavItem = ({ clicked, setClicked, name, link }) => {
    const isContact = name === "Contact";
    return (
        <NavLink
            scroll={(el) =>
                el.scrollIntoView({
                    behavior: "smooth",
                    block: `${isContact ? "start" : "end"}`,
                })
            }
            to={`/${link}`}
            className="navItem"
            onClick={() => {
                if (clicked) {
                    setClicked(false);
                }
            }}
        >
            <h3>{name}</h3>
        </NavLink>
    );
}

export default NavItem;

// const handleClick = (event) => {
//     event.preventDefault();
//     const elementId = event.target.getAttribute("href");
//     const element = document.getElementById(elementId);
//     element.scrollIntoView({ behavior: "smooth" });
// };

// const NavItem = ({ clicked, setClicked, name, link }) => {
//     return (
//         <NavLink
//             to={`/${link}`}
//             className="navItem"
//             onClick={handleClick}
//         >
//             <h3>{name}</h3>
//         </NavLink>
//     );
// }