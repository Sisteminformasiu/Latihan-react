import { useEffect, useState } from "react";
import axios from "axios";

import NewsCard from "../../components/NewsCard";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function PortalNews() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchData = (category) => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${
          !category ? "business" : category
        }&apiKey=3c4450056a084d4aac84f70eea8f55fd`
      )
      .then((response) => {
        setData(response?.data?.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = () => {
    const newData = [...data];
    const searchData = newData.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(searchData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (search === "") {
      fetchData();
    }
  }, [search]);

  return (
    <div>
      <div>
        <Navbar
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
      </div>
      <div className="w-screen flex justify-center">
        <div className="w-max flex gap-x-5 mt-20">
          <Button
            id={"categories"}
            label={"Politics"}
            onClick={() => fetchData("politics")}
          />
          <Button
            id={"categories"}
            label={"Business"}
            onClick={() => fetchData("business")}
          />
          <Button
            id={"categories"}
            label={"Health"}
            onClick={() => fetchData("health")}
          />
          <Button
            id={"categories"}
            label={"Sport"}
            onClick={() => fetchData("sport")}
          />
        </div>
      </div>
      <div className="container w-screen h-screen grid grid-cols-3 gap-x-20 gap-y-12 p-20">
        {data &&
          data.map((item, index) => {
            return (
              <NewsCard
                key={index}
                id={item?.search?.id}
                title={item?.title}
                image={item?.urlToImage}
                author={item?.author}
                onClick={() =>
                  navigate(`/detail/${item?.search?.id}`, {
                    state: {
                      news: item,
                    },
                  })
                }
              />
            );
          })}
      </div>
    </div>
  );
}

export default PortalNews;
