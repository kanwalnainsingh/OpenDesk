
package com.opendesk.model;

import javax.annotation.Generated;
import com.google.gson.annotations.SerializedName;

@Generated("net.hexar.json2pojo")
@SuppressWarnings("unused")
public class Floor {

    @SerializedName("name")
    private String mName;
    @SerializedName("totalSeat")
    private String mTotalSeat;

    public String getName() {
        return mName;
    }

    public void setName(String name) {
        mName = name;
    }

    public String getTotalSeat() {
        return mTotalSeat;
    }

    public void setTotalSeat(String totalSeat) {
        mTotalSeat = totalSeat;
    }

}
