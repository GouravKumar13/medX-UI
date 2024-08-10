
import InclinicSection from "../components/ui/HomeScreenComp/InclinicSection";
import OpdSelection from "../components/ui/HomeScreenComp/OpdSelection";

const HomePage = () => {
    return (
        <div className="py-10 mx-20 flex flex-col space-y-20 items-center justify-between">

            <OpdSelection />
            <InclinicSection />
        </div>
    );
};

export default HomePage;
