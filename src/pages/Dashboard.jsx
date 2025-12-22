import Coffee from "../components/Coffee";
import Heading from "../components/Heading";
import { getTheFavorite } from "../utils/FavoriteServer";

const Dashboard = () => {
  const storedCoffees = getTheFavorite();

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
        {storedCoffees.map((coffee) => (
          <Coffee key={coffee?.id} coffee={coffee}></Coffee>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
