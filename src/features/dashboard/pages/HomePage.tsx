import {useCurrentUser} from "@features/auth/api";
import DashboardSummary from "../components/DashboardSummary";
import AppraisalList from "../components/AppraisalList";

function HomePage() {
    // Load user data if not already loaded
    const {data: user, isLoading} = useCurrentUser();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <DashboardSummary/>

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Recent Appraisals</h2>
                <AppraisalList/>
            </div>
        </div>
    );
}

export default HomePage;
