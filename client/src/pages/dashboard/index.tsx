import {useUser} from "@clerk/clerk-react";
import { useMemo } from "react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordlist } from "./financial-record-list";
import "./financial-record.css";

export const Dashboard = () => {
    const { user } = useUser();
    const { records } = useFinancialRecords();

    const totalMonthly = useMemo(() => {
        let totalAmount = 0;
        records.forEach((records) => {
            totalAmount += records.amount
        });

        return totalAmount;
    }, [records]);

    return ( <div className="dashboard-container"> 
    <h1>Welcome {user?.firstName}! Here are your Finances</h1>
    <FinancialRecordForm/>
    <div>Total Monthly: ${totalMonthly}</div>
    <FinancialRecordlist/>
    </div>
    );
};