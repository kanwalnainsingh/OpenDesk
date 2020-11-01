import React from 'react';
import './OrganisationFooter.css'
import SiteFloor from "./SiteFloor";

const OrganisationFooter = () => {
    return (
        <React.Fragment>

            <section className="container mobile_screen_3">
                <SiteFloor/>
                
                <div className="row border_top">
                    <div className="col">
                        <form className="p-2">
                            <div className="form-group  d-inline-flex mr-3">
                                <p className="h5 mr-3">Name:</p>
                                <input type="text" className="form-control pr-5"  placeholder="Your Company name"/>
                            </div>
                            <div className="form-group d-inline-flex mr-3">
                                <p className="h5 mr-3">Location:</p>
                                <input type="text" className="form-control pr-5"  placeholder="Choose Your Location"/>
                            </div>
                        </form>
                        <form className="p-2">
                            <div className="form-group d-inline-flex">
                                <p className="h5 mr-3">Total Desk:</p><input type="number" className="form-control border_radius"/>
                            </div>
                            <div className="form-group d-inline-flex ml-3">
                                <p className="h5 mr-3"> Reserved:</p> <input type="number" className="form-control border_radius"/>
                            </div>
                        </form>
                        <form className="p-2">
                            <div className="ml-3">
                                <p className="h5 d-flex">Open Desk:
                                    <textarea className="text_area" rows="1" cols="2"/>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="btn_style">
                        <input type="submit" className="btn btn-sm text_color" value="Save"/>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default OrganisationFooter;
