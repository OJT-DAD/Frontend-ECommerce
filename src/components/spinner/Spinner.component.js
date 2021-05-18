import React from 'react';
import { connect } from 'react-redux';
import './spinner.css';
import loadingImage from '../../images/Loading.png';

const Spinner = ({ isLoading }) => {
    return(
        <React.Fragment>
            {isLoading ?
                (<div id="spinner-fade">
                    <div className="con-spinner">
                        <div className="con-img-loading">
                            <img src={loadingImage} alt="loading"/>
                        </div>
                        <h3>
                            Loading
                            <span className="first">.</span>
                            <span className="second">.</span>
                            <span className="last">.</span>
                        </h3>
                    </div>
                </div>) : null
            }
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({
    isLoading: state.loading
});
export default connect(mapStateToProps)(Spinner);