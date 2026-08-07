import React from "react";
import "./skills.css";
import Section from "../shared/Section";
import SkillGroup from "./SkillGroup";
import { skillGroups } from "../../data/skills";

const Skills = () => (
  <Section
    id="skills"
    className="skills"
    title="Skills"
    subtitle="What I reach for"
  >
    <div className="skills__container container">
      {skillGroups.map((group, i) => (
        <SkillGroup key={group.title} index={i + 1} {...group} />
      ))}
    </div>
  </Section>
);

export default Skills;
