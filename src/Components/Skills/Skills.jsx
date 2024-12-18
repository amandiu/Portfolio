import React from "react";
import TopicHeader from "../TopicHeader/TopicHeader";
import SkillCard from "../skillCard/skillCard";
import Radio from "../Radio/Radio";
import SubHeader from "../SubHeader/SubHeader";

const LanguageRating = ({
  languageC,
  languageChas,
  languageJS,
  languageTS,
}) => {
  return (
    <div>
      <div>
        <SkillCard value={languageC} name="C" />
        <SkillCard value={languageChas} name="C++" />
        <SkillCard value={languageJS} name="JavaScript" />
        <SkillCard value={languageTS} name="TypeScript" />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div>
      <TopicHeader Title="💻 Skills"></TopicHeader>
      <p className="md:px-16 mt-6 text-lg text-green-400 text-center">
        People will ask how skilled you are, but remember — true skill comes
        from passion, continuous learning, and perseverance. Stay dedicated, and
        you’ll become the answer they seek!
      </p>

      <div className="md:grid-cols-3 w-full mt-4 justify-center grid md:px-16  gap-3">
        <div className="flex">
          <div>
            <SubHeader subTitle="Programing Language" />
            <LanguageRating
              languageChas="2"
              languageC="3"
              languageJS="4"
              languageTS="4"
            />
          </div>
        </div>
        <div className="flex">
          <div>
            <SubHeader subTitle="Programing Language" />
            <LanguageRating />
          </div>
        </div>
        <div className="flex">
          <div>
            <SubHeader subTitle="Programing Language" />
            <LanguageRating />
          </div>
        </div>
        <div className="flex mt-4">
          <div>
            <SubHeader subTitle="Programing Language" />
            <LanguageRating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
