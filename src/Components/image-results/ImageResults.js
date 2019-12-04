import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { GridList, GridListTile, GridListTileBar, IconButton, Dialog } from '@material-ui/core';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import InfoIcon from '@material-ui/icons/Info';


class ImageResults extends Component {

  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = (img) => {
    this.setState({ open: true, currentImg: img});
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    console.log(this.props.images)
    let imageListContent;
    const { images } = this.props;

    if (images){
      imageListContent = (
        <GridList cols={3}>
          {images.map(img => (
            <GridListTile key={img.id}>
              <img src={img.largeImageURL} alt={img.tags} />
              <GridListTileBar
                title={img.tags}
                key={img.id}
                subtitle={
                  <span>
                    by <strong>{img.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                    <InfoIcon color='white' />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    }else{
      imageListContent = null;
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];
  
    return(
      <div>
        {imageListContent}
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <img src={this.state.currentImg } alt="" style={{width: '100%'}} />
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;