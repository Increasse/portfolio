import React from "react";

const Image = ({ path }) => {
    try {
        const image = require(path);

        if (!image) return null;
        return <img src={image.default} />;
    } catch (error) {
        console.log(`Image with name "${path}" does not exist`);
        return null;
    }
};

export default Image;
