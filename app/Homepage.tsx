import Explore from "./Explore";
import { explore } from "../constant";
import Link from "next/link";
import Card from "./Card";

function Homepage({ cards }: { cards: ICard[] }) {
  return (
    <main className="p-10 px-5 bg-white max-w-6xl mx-auto space-y-10">
      <div className="flex space-x-5">
        <div className="text-lg relative after:absolute after:left-0 after:-bottom-[2px] font-semibold after:content-[''] after:w-full after:h-[2px] after:bg-violet-900 cursor-pointer text-violet-900">
          Explore
        </div>

        <div className="text-lg font-semibold after:content-[''] after:w-full after:h-[2px] cursor-pointer text-gray-500">
          Applied
        </div>

        <div className="text-lg font-semibold after:content-[''] after:w-full after:h-[2px] after:bg-violet-900 cursor-pointer text-gray-500">
          Saved
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 lg:grid-cols-6">
        {explore.map((exp, i) => (
          <Explore key={i} img={exp.imgUrl} text={exp.title} />
        ))}
      </div>

      <div className="space-y-3">
        <div className="flex justify-between mb-3">
          <h3 className="text-lg  font-semibold text-slate-900">Employee</h3>

          <Link
            href="/addUser"
            className="py-1 px-4 flex items-center rounded-full bg-green-100/70 text-green-700 text-sm font-semibold hover:scale-[1.03] transition"
          >
            <span className="mr-2">
              <img
                src="/plus.svg"
                alt="plus"
                className="w-4 h-4 object-contain"
              />
            </span>
            Add Employee
          </Link>
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Card
              key={i}
              id={card.auth_id}
              image={card.image}
              location={card.location}
              name={card.user_name}
              role={card.role}
              salary={card.salary}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Homepage;
