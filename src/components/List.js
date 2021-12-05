import PropTypes from 'prop-types';
import Video from "./Video";
import Article from "./Article";
import withHighLightPost from "./withHighLightPost";


const VideoHOC = withHighLightPost(Video);
const ArticleHOC = withHighLightPost(Article);

function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoHOC key={item.url || item.title} {...item} />
                );
            case 'article':
                return (
                    <ArticleHOC key={item.url || item.title} {...item} />
                );
            default:
                return <p>Empty</p>
        }
    });
}

List.propTypes = {
    list: PropTypes.array.isRequired
}

export default List;