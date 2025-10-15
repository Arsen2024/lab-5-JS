import React from "react";
import "./UserCard.css";

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    gender: "male" | "female";
    age: number;
    position: string;
    photo: string;
    hobbies: string[];
};

interface UserCardProps {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    // умовне фарбування картки в залежності від віку
    const cardStyle = {
        backgroundColor: user.age >= 30 ? "#c8e6c9" : "#bbdefb", // зелений або синій
    };

    return (
        <div className="user-card" style={cardStyle}>
            <img src={user.photo} alt={user.firstName} className="user-photo" />
            <h2>
                {user.firstName} {user.lastName}
            </h2>
            <p>Gender: {user.gender}</p>
            {/* умовний рендеринг (v-if) */}
            {user.age > 18 && <p>Age: {user.age}</p>}
            <p>Position: {user.position}</p>

            <h4>Hobbies:</h4>
            <ul>
                {/* аналог v-for */}
                {user.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserCard;