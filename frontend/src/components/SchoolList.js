import React from "react";
import SchoolCard from "../components/SchoolCard.js";
// import useInfiniteScroll from "../components/useInfiniteScroll";
// import InfiniteScroll from "react-infinite-scroll-component";

export default function SchoolList(props) {
  let { schools } = props;
  schools = schools.slice(0, 12);

  return (
    <div>
      {schools.map((school) => (
        <SchoolCard
          key={school.id}
          school={school}
          routeProps={props.routeProps}
        />
      ))}
    </div>
  );
}
