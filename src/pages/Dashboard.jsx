import { useEffect, useState } from "react";
import Coffee from "../components/Coffee";
import Heading from "../components/Heading";
import { getTheFavorite } from "../utils/FavoriteServer";

const Dashboard = () => {
  const [coffees, setCoffees] = useState(() => getTheFavorite() || []);

  useEffect(() => {
    const handleStorageEvent = () => {
      setCoffees(() => getTheFavorite() || []);
    };

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, []);

  return (
    <div>
      {/* heading component  */}
      <Heading
        title={"Welcome to Dashboard"}
        subtitle={
          "Manage coffees that you have previously added as favorite. You can view or remove them from here."
        }
      ></Heading>

      {/* dynamic cards:: add  favorite coffees */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 place-items-center mt-10">
        {coffees.map((coffee) => (
          <Coffee key={coffee?.id} coffee={coffee}></Coffee>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
