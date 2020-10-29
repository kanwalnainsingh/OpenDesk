
package com.opendesk.model;

import com.google.gson.annotations.SerializedName;

import javax.annotation.Generated;
import java.util.List;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class Site {

    @SerializedName("floors")
    private List<Floor> mFloors;
    @SerializedName("name")
    private String mName;

    public List<Floor> getFloors() {
        return mFloors;
    }

    public void setFloors(List<Floor> floors) {
        mFloors = floors;
    }

    public String getName() {
        return mName;
    }

    public void setName(String name) {
        mName = name;
    }

}
