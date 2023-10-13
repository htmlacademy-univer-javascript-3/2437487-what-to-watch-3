type MyListHeaderProps = {
  count: number;
}

export function MyListHeader({count}: MyListHeaderProps) {
  return (
    <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{count}</span></h1>
  );
}
