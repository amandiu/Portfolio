import React from "react";
import TopicHeader from "../TopicHeader/TopicHeader";
import SkillCard from "../skillCard/skillCard";
import Radio from "../Radio/Radio";
import SubHeader from "../SubHeader/SubHeader";

const Skills = () => {
  return (
    <div>
      <TopicHeader Title="💻 Skills"></TopicHeader>
      <p className="md:px-16 mt-6 text-lg text-green-400 text-center">
        People will ask how skilled you are, but remember — true skill comes
        from passion, continuous learning, and perseverance. Stay dedicated, and
        you’ll become the answer they seek!
      </p>

      <div className="w-full sm:grid-cols-2 md:grid-cols-3 mt-4 justify-center grid md:px-16">
        <div className="flex">
          <div>
            <SubHeader subTitle="Programing Language" />
            <SkillCard value="3" name="C" />
            <SkillCard value="2" name="C++" />
            <SkillCard value="4" name="Java Script" />
            <SkillCard value="4" name="Type Script" />
            <SkillCard value="3" name="HTML" />
            <SkillCard value="3" name="CSS" />
          </div>
        </div>
        <div className="flex">
          <div>
            <SubHeader subTitle="React" />
            <SkillCard value="5" name="React Router" />
            <SkillCard value="3" name="JSX element" />
            <SkillCard value="5" name="Material UI Design" />
            <SkillCard value="3" name="Bootstrap CSS" />
          </div>
        </div>
        <div className="flex">
          <div>
            <SubHeader subTitle="React Native" />
            <SkillCard value="4" name="Front End Development" />
            <SkillCard value="3" name="Back End Development" />
          </div>
        </div>
        <div className="flex">
          <div>
            <SubHeader subTitle="Node JS" />
            <SkillCard value="5" name="Firebase Admin Development" />
            <SkillCard value="2" name="Web socket" />
            <SkillCard value="3" name="Modern Java Script" />
          </div>
        </div>
        <div className="flex">
          <div>
            <SubHeader subTitle="Firebase" />
            <SkillCard value="3" name="Firebase Authentication" />
            <SkillCard value="3" name="Real time database" />
            <SkillCard value="3" name="Notification" />
            <SkillCard value="3" name="Google Cloud API integration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
