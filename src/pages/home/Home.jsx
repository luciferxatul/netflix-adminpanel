import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./home.css"
import { userData } from "../../dummyData.js";
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {

  const MONTHS = useMemo(() =>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ], []
  );
  
  const [userStats, setUserStats] = useState([]);
  
  useEffect(() => {
    const getStats = async () => {
      try{
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGRjOTQ0ZWExZDQxMDM4ZmM0OWM0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4ODQ3Nzg3OSwiZXhwIjoxNzUxNjM2Mjc5fQ.M_2en3kZbq-z29ePrEXoGnIBauOYXDkKvVUWaSF0wxY"
          },
        });
        const statsList = res.data.sort(function(a, b) {
          return a._id - b._id;
        }) 
        statsList.map(item=> setUserStats(prev=>[...prev,{name:MONTHS[item._id-1], "New User": item.total}]));
      } catch (err){
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);


  return (
    <div className='home'>
        <FeaturedInfo />
        <Chart title="User Analytics" data={userStats} dataKey="New User" grid />
        <div className='homeWidge'>
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}
