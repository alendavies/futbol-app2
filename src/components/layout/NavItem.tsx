import { Link, useLocation } from "react-router-dom";

type NavItemProps = {
    name: string;
    link?: string;
};

function NavItem(props: NavItemProps) {
    const { name, link } = props;

    const currentRoute = useLocation().pathname;

    return (
        <>
            {(link && currentRoute === link) ||
            currentRoute.includes(name.toLowerCase().replace(/s$/, "")) ? (
                <li className="text-primary hover:underline hover:underline-offset-8 hover:decoration-primary hover:decoration-2 cursor-pointer">
                    {link ? <Link to={link}>{name}</Link> : <p>{name}</p>}
                </li>
            ) : (
                <li className="hover:underline hover:underline-offset-8 hover:decoration-primary hover:decoration-2 cursor-pointer">
                    {link ? <Link to={link}>{name}</Link> : <p>{name}</p>}
                </li>
            )}
        </>
    );
}

export default NavItem;
