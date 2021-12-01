import React from "react";
import RoutingUser from "./routingUser";
import Users from "./users";
import { useParams } from "react-router-dom";
const RoutingUsers = () => {
    const params = useParams();
    const { userId } = params;

    return <>{userId ? <RoutingUser /> : <Users />}</>;
};

export default RoutingUsers;
