'use client'
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const TasksPage  = () =>{
    const tasks = useQuery(api.users.getUsers);
    return (
        <div>
            hii i am there 
        </div>
    )
}
export default TasksPage;