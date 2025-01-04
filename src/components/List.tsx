interface ListProps {
    children: React.ReactNode;
}

function List({ children }: ListProps) {
    return <ul>{children}</ul>;
}

export default List;
