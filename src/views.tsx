import './render'

export function mainView() {
    return (
        <vertical>
            <text text="请输入商品 id:"></text>
            <input id="input" text="1234567890"></input>
            <button id="button">查询</button>
        </vertical>
    )
}
