import React, { FC, useState, useEffect } from "react";

interface IProductArray {
  projects?: any;
}

interface IArray {
  id?: number;
  array?: any;
}

interface IProject {
  id?: string;
  description?: string;
}

const ProjectDescription = ({ id, array }: IArray) => {
  // dont do logical stuffs outside, do inside useEffect
  const [project, setProjects] = useState<IProject | any>();
  useEffect(() => {
    setProjects(array?.projects.find((x: { id: any }) => x.id == id));
  }, []);

  return (
    <div
      className="flex flex-col gap-y-4"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="h-110 hover:scale-110 ease-in duration-300 rounded-md overflow-auto bg-transparent">
        {project?.description}
      </div>
      <div></div>
    </div>
  );
};
export default ProjectDescription;
