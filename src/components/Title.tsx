import type { NextPage } from "next";

const Title = (props: any) => {
    return(
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-4 text-5xl font-bold">
                {props.children}
            </h1>
            <hr className="border-4 border-purple-500" />
        </div>
    )
}

export default Title
