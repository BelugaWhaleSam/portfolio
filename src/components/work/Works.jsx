import React, { useState, useMemo } from "react";
import { projectsData, projectsNav } from "../../data/projects";
import WorkItems from "./WorkItems";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = useMemo(
    () =>
      activeCategory === "all"
        ? projectsData
        : projectsData.filter(
            (project) => project.category === activeCategory
          ),
    [activeCategory]
  );

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map(({ name }) => (
          <button
            type="button"
            onClick={() => setActiveCategory(name)}
            className={`work__item ${
              activeCategory === name ? "active-work" : ""
            }`}
            key={name}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
