/* eslint-disable react/prop-types */
import classes from './PageHeader.module.css'

const PageHeader = (props) => {
    const { title, color } = props;
    

    const gradient = color ? `linear-gradient(to bottom, white,  ${color})` : 'linear-gradient(to right, black, black)';
    const headerStyle = {
        backgroundImage: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
    };

    return (
        <div className={classes.Container}>
            <h1 style={headerStyle}>
                {title}
            </h1>
        </div>
    );
}

export default PageHeader;