import React from "react";

const Whatwedo = () => {
    return (
        <div>
            <div
                name="about"
                className="w-full h-full text-white sm:my-6"
            >
                <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-10 text-cyan-400 border-b-4 border-yellow-300">
                            Who we are!
                        </p>
                    </div>

                    <p className="text-xl mt-5 text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.


                    </p>

                    <br />
                </div>
            </div>
        </div>
    );
};

export default Whatwedo;
