import React from "react";

function Hello({ backgroundColor, name, color }) {
    return (
        <div style={{backgroundColor, color}}>
            안녕하세요 {name}
        </div>
    )
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;