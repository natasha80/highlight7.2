import Popular from "./Popular";
import New from "./New";


const withHighLightPost = (Component) => {
    return (props) => {
        if (props.views < 100) {
            return <New><Component {...props} /></New>
        }
        if (props.views > 1000) {
            return <Popular><Component {...props} /></Popular>
        }
        return <Component {...props} />
    };
}

export default withHighLightPost;