"use client";

import DashboardOverview from "@/components/common/cards/dashboard-overview";
import Map from "@/components/common/map/map";
import Geolocator from "@/components/common/maps/geolocator";
import PenTableContainer from "@/components/common/table/PensTable/Pen";
import { dashboardOverviewSource } from "@/helpers/dashboard-overview-source";
import { CaretUp, File } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <section >
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2">
        {dashboardOverviewSource.map((element, index) => {
          return (
            <div key={index}>
              <DashboardOverview element={element} />
            </div>
          );
        })}
      </div>
      {/* <Geolocator /> */}
      <Map />
      <PenTableContainer />
    </section>
  );
};

export default DashboardPage;
