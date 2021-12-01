import React, { useState, useEffect } from "react";
import api from "../api";
import { useParams, Link } from "react-router-dom";
import Quality from "./quality";

const RoutingUser = () => {
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);
    const params = useParams();
    const { userId } = params;
    if (user) {
        console.log(user);

        return (
            <>
                <h1>{user.name}</h1>
                <h2>Рейтинг: {user.rate}</h2>
                <h2>Встречи: {user.completedMeetings}</h2>
                <h2>Профессия: {user.profession.name}</h2>
                <h2>Качества: </h2>
                {user.qualities.map((qual) => (
                    <Quality key={qual._id} {...qual} />
                ))}
                <br />
                <Link to="/users">
                    <button className="btn btn-primary btn-large">
                        Все пользователь
                    </button>
                </Link>
            </>
        );
    }
    return <h1>loading...</h1>;
};

export default RoutingUser;
