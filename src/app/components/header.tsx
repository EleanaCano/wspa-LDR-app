type Props = {
    children: string;
}

const Header = (props: Props) => {
    return (
        <h1 className="text-black text-5xl font-semibold p-10">{props.children}</h1>
    );
}

export { Header };