import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleSearch, search, setSearch }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-2">
      <nav className="ml-12 mr-12 flex justify-between mb-2">
        <ul>
          <li className="text-3xl font-black">Zi News</li>
        </ul>
        <ul className="flex justify-center gap-x-12 items-center">
          <li className="font-semibold hover:text-orange-600 hover:underline underline-offset-8">
            Home
          </li>
          <li className="font-semibold hover:text-orange-600 hover:underline underline-offset-8">
            About
          </li>
          <li className="font-semibold hover:text-orange-600 hover:underline underline-offset-8">
            Pricing
          </li>
          <li className="font-semibold hover:text-orange-600 hover:underline underline-offset-8">
            Comunity
          </li>
        </ul>
        <ul>
          <li>
            <Button
              id="logout"
              label="LOG OUT"
              type="submit"
              onClick={() => navigate(-1)}
            />
          </li>
        </ul>
      </nav>
      <ul className="w-full flex justify-center gap-x-2">
        <li>
          <input
            className="w-96 h-full bg-gray-100 rounded-md text-black border-none focus:outline-none flex items-center justify-center p-4"
            type="text"
            placeholder="search.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </li>
        <li>
          <Button
            id="search"
            label="Search"
            onClick={(item) => handleSearch(item.title)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
