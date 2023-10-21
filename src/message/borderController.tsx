

type Props = {
    type: "incoming" | "outgoing",
    last?: boolean,
    single?: boolean,

}
export const getBorderCss = ({
    type,
    last,
    single
}: Props) => {

    let borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight

    if (type === "outgoing") {
        borderTopLeft = true
        borderBottomLeft = true
        borderBottomRight = last ? true : false
        borderTopRight = !last && single ? true : false
    } else {
        borderTopRight = true
        borderBottomRight = true
        borderBottomLeft = single || last ? true : false
        borderTopLeft = last ? true : false
    }

    return `
    border-top-left-radius: ${borderTopLeft ? "8px" : "2px"};
    border-top-right-radius: ${borderTopRight ? "8px" : "2px"};
    border-bottom-left-radius: ${borderBottomLeft ? "8px" : "2px"};
    border-bottom-right-radius: ${borderBottomRight ? "8px" : "2px"};
    `

}