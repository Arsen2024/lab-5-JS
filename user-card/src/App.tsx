import React, {useState} from 'react';
import UserCard, {User} from "./components/UserCard";
import './App.css';

function App() {
  const[filter, setFilter] = useState<"all" | "male" | "female">("all");

    const users: User[] = [
        {
            id: 1,
            firstName: "Vasyl",
            lastName: "Petrov",
            gender: "male",
            age: 16,
            position: "Frontend Developer",
            photo: "https://randomuser.me/api/portraits/men/1.jpg",
            hobbies: ["Coding", "Gaming", "Traveling"],
        },
        {
            id: 2,
            firstName: "Anna",
            lastName: "Petrova",
            gender: "female",
            age: 25,
            position: "Designer",
            photo: "https://randomuser.me/api/portraits/women/2.jpg",
            hobbies: ["Drawing", "Music", "Reading"],
        },
        {
            id: 3,
            firstName: "Oleksandr",
            lastName: "Ivanov",
            gender: "male",
            age: 17,
            position: "Student",
            photo: "https://randomuser.me/api/portraits/men/3.jpg",
            hobbies: ["Football", "Movies", "Coding"],
        },
        {
            id: 4,
            firstName: "Maria",
            lastName: "Koval",
            gender: "female",
            age: 22,
            position: "QA Engineer",
            photo: "https://randomuser.me/api/portraits/women/4.jpg",
            hobbies: ["Cooking", "Yoga", "Travel"],
        },
        {
            id: 5,
            firstName: "Dmytro",
            lastName: "Bondar",
            gender: "male",
            age: 35,
            position: "Backend Developer",
            photo: "https://randomuser.me/api/portraits/men/5.jpg",
            hobbies: ["Fishing", "Cars", "Biking"],
        },
        {
            id: 6,
            firstName: "Oksana",
            lastName: "Lytvyn",
            gender: "female",
            age: 19,
            position: "HR Manager",
            photo: "https://randomuser.me/api/portraits/women/6.jpg",
            hobbies: ["Dancing", "Photography", "Cooking"],
        },
        {
            id: 7,
            firstName: "Ihor",
            lastName: "Tkachenko",
            gender: "male",
            age: 40,
            position: "DevOps Engineer",
            photo: "https://randomuser.me/api/portraits/men/7.jpg",
            hobbies: ["Running", "Reading", "Chess"],
        },
        {
            id: 8,
            firstName: "Yulia",
            lastName: "Melnyk",
            gender: "female",
            age: 23,
            position: "Marketing Specialist",
            photo: "https://randomuser.me/api/portraits/women/8.jpg",
            hobbies: ["Fashion", "Traveling", "Music"],
        },
        {
            id: 9,
            firstName: "Serhii",
            lastName: "Kravets",
            gender: "male",
            age: 21,
            position: "Full Stack Developer",
            photo: "https://randomuser.me/api/portraits/men/9.jpg",
            hobbies: ["Coding", "Gaming", "Coffee"],
        },
        {
            id: 10,
            firstName: "Viktoria",
            lastName: "Savchuk",
            gender: "female",
            age: 29,
            position: "Project Manager",
            photo: "https://randomuser.me/api/portraits/women/10.jpg",
            hobbies: ["Management", "Traveling", "Reading"],
        },
    ];

    const filteredUsers =
        filter === "all" ? users : users.filter((u) => u.gender === filter);

    return (
        <div className="App">
            <h1>User List</h1>

            {/* Toolbar */}
            <div className="toolbar">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => setFilter("all")}
                >
                    All
                </button>
                <button
                    className={filter === "male" ? "active" : ""}
                    onClick={() => setFilter("male")}
                >
                    Male
                </button>
                <button
                    className={filter === "female" ? "active" : ""}
                    onClick={() => setFilter("female")}
                >
                    Female
                </button>
            </div>

            {/* Якщо список пустий */}
            {filteredUsers.length === 0 ? (
                <p className="empty">Список юзерів пустий</p>
            ) : (
                <div className="user-list">
                    {filteredUsers.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
