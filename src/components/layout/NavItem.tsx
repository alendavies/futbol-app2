import { Link } from "react-router-dom";

type NavItemProps = {
    name: string;
    link?: string;
};

function NavItem(props: NavItemProps) {
    const { name, link } = props;

    return (
        <li className="hover:underline hover:underline-offset-8 hover:decoration-primary hover:decoration-2 cursor-pointer">
            {link ? <Link to={link}>{name}</Link> : <p>{name}</p>}
        </li>
    );
}

export default NavItem;
