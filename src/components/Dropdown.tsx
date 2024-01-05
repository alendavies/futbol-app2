import { Link } from "react-router-dom";
import NavItem from "./layout/NavItem";

interface DropdownProps {
    items: {
        name: string;
        logo: string;
        link: string;
    }[];
    label: string;
    title: string;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;
}

function Dropdown(props: DropdownProps) {
    const { items, label, title, open, handleOpen, handleClose } = props;
    return (
        <div>
            <div onMouseEnter={() => handleOpen()}>
                {open ? (
                    <div className="underline underline-offset-8 decoration-primary decoration-2 cursor-pointer">
                        <NavItem name={label} />
                    </div>
                ) : (
                    <div>
                        <NavItem name={label} />
                    </div>
                )}
            </div>
            {open && (
                <div
                    onMouseLeave={() => handleClose()}
                    className="absolute z-[1] pl-6 pt-4 pb-4 left-0 top-16 w-screen max-w-full bg-neutral border-b-2 border-t-2 border-base-content"
                >
                    <p className="pb-5 text-sm text-neutral-400">{title}</p>
                    <div className="grid grid-cols-12 place-items-start">
                        {items.map((item) => {
                            return (
                                <Link
                                    className="cursor-pointer col-span-3 hover:bg-base-100 rounded-md w-full hover:w-2/3 flex items-center flex-row space-x-2 p-2"
                                    to={item.link}
                                >
                                    <div className="w-6 flex items-center justify-center">
                                        <img
                                            src={item.logo}
                                            className="w-auto h-6"
                                        />
                                    </div>

                                    <p className="text-sm">{item.name}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Dropdown;
