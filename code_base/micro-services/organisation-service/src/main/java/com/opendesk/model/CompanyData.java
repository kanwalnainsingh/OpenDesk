
package com.opendesk.model;

import com.google.gson.annotations.SerializedName;

import javax.annotation.Generated;
import java.util.List;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class CompanyData {

    @SerializedName("city")
    private String mCity;
    @SerializedName("companyName")
    private String mCompanyName;
    @SerializedName("headQuarters")
    private String mHeadQuarters;
    @SerializedName("sites")
    private List<Site> mSites;

    public CompanyData(String mCity, String mCompanyName, String mHeadQuarters, List<Site> mSites) {
        this.mCity = mCity;
        this.mCompanyName = mCompanyName;
        this.mHeadQuarters = mHeadQuarters;
        this.mSites = mSites;
    }

    public String getCity() {
        return mCity;
    }

    public void setCity(String city) {
        mCity = city;
    }

    public String getCompanyName() {
        return mCompanyName;
    }

    public void setCompanyName(String companyName) {
        mCompanyName = companyName;
    }

    public String getHeadQuarters() {
        return mHeadQuarters;
    }

    public void setHeadQuarters(String headQuarters) {
        mHeadQuarters = headQuarters;
    }

    public List<Site> getSites() {
        return mSites;
    }

    public void setSites(List<Site> sites) {
        mSites = sites;
    }

}
