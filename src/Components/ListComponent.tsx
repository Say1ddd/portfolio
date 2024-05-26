type ListComponentProps = {
    icon?: React.ReactNode;
    label?: string;
    className?: string;
    }

const ListComponent = ({label, icon, className}: ListComponentProps) => {
  return (
        <li className={className}>
            <span>{icon}</span>
            <p>{label}</p>
        </li>
  )
}

export default ListComponent