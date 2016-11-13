import * as React from "react";

export interface IToolTipProps extends React.HTMLAttributes {

}

export class ToolTip extends React.Component<IToolTipProps, any> {
    public render() {
         const {top = 150, left = 100, hidden, html="", translate = 50} = this.props;
         const style = {
            display: hidden ? 'none' : 'block',
            position: 'fixed',
            top,
            left,
            transform: `translate(-${translate}%, 0)`,
            pointerEvents: 'none'
        };
        return <div className="tooltip" style={style} >{html}</div>
    }
}