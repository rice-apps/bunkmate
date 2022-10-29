interface UserProps {
    id: number;
    name: string;
    pref_temp: string;
    bedtime: string;
    gender_pref: string;
}

const UserCard = ({id, name, pref_temp, bedtime, gender_pref}: UserProps) => {
    
    return (
        <ul>
            <li><h2>{name}</h2></li>
            <li>{pref_temp}</li>
            <li>{bedtime}</li>
            <li>{gender_pref}</li>
        </ul>
    )
}
/*
const tags = (props: tags) => {
    const tag1 = props.tag1;
    const tag2 = props.tag2;
    const tag3 = props.tag3;    
    const tag4 = props.tag4;

    return (
        <div className="allTags">
            <p>{tag1}</p>
            <p>{tag2}</p>
            <p>{tag3}</p>
            <p>{tag4}</p>
        </div>
    )
}
*/
export default UserCard;

