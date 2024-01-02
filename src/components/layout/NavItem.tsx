type NavItemProps = {
    name: string;
    // link?: string;
};

function NavItem(props: NavItemProps) {
    const { name } = props;

    return (
        <li className="hover:underline hover:underline-offset-8 hover:decoration-primary hover:decoration-2 cursor-pointer">
            {name}
        </li>
    );
}

export default NavItem;
