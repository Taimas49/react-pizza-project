import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={457}
            viewBox="0 0 280 457"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="140" cy="143" r="140" />
            <rect x="0" y="291" rx="3" ry="3" width="280" height="27" />
            <rect x="0" y="327" rx="6" ry="6" width="280" height="84" />
            <rect x="10" y="422" rx="4" ry="4" width="95" height="27" />
            <rect x="145" y="415" rx="20" ry="20" width="136" height="39" />
        </ContentLoader>
    );
}

export default LoadingBlock;
