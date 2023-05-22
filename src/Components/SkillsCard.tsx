type SkillsCardProps = {
    icon: React.ReactNode;
    name: string;
    }

const SkillsCard = ({name, icon}: SkillsCardProps) => {
  return (
    <>
        <li>
            <span>{icon}</span>
            <p>{name}</p>
        </li>
    </>
  )
}

export default SkillsCard