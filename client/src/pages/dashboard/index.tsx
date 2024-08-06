import {useUser} from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordlist } from "./financial-record-list";
import "./financial-record.css";

export const Dashboard = () => {
    const { user } = useUser();

    return ( <div className="dashboard-container"> 
    <h1>Welcome {user?.firstName}! Here are your Finances</h1>
    <FinancialRecordForm/>
    <FinancialRecordlist/>
    </div>
    );
};