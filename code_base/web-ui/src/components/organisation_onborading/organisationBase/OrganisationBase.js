import React from 'react';
import './OrganisationBase.css'

let OrganisationBase = () => {
    return (
        <React.Fragment>
            <section className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-md-4 mobile_screen_1">
                                <div className="company_image">
                                    <i className="fa fa-user-alt fa-8x bg-my justify-content-center d-flex mt-2"/>
                                </div>
                                <p className="bg-my logo-color p_text d-flex justify-content-center">Company Logo</p>
                            </div>
                            <div className="col-md-8 mobile_screen_2">
                                <form className="Input_element_1">
                                    <div className="form-group d-flex">
                                        <p className="h4 mr-3">Name:</p>
                                        <input type="text" className="form-control"  placeholder="Your Company name"/>
                                    </div>
                                    <div className="form-group d-flex">
                                        <p className="h4 mr-3">Location:</p>
                                        <input type="text" className="form-control"  placeholder="Choose Your Location"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default OrganisationBase;
