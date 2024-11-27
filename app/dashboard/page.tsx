"use client";
import { useGetUserQuery } from "@/lib/features/services/usersAPI";
import React from "react";

const Home = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.log(error);
    console.log(data);
    return <div>Error...</div>;
  }
  if (isSuccess) console.log(data);
  return (
    <div>
      {isSuccess ? (
        <div>
          {data.map((item) => {
            return (
              <div key={item.id} className="bg-white">
                Test {item.name.firstname} {item.name.lastname}
              </div>
            );
          })}
        </div>
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  );
};

export default Home;
