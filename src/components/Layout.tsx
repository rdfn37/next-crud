import type { NextPage } from "next";
import Title from "./Title";

interface LayoutProps {
    title: string,
    children: any
}

const Layout = (props: LayoutProps) => {
  return (
    <div className="flex flex-col w-2/3 bg-gray-50 text-gray-800 rounded-md">
        <Title>{props.title}</Title>
        <div className="p-6 text-3xl">
            {props.children}
        </div>
    </div>
  )
};

export default Layout;
