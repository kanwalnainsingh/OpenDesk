package com.opendesk.dao;

import com.opendesk.model.CompanyData;
import com.opendesk.model.Floor;
import com.opendesk.model.Site;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class SiteRepository {

    public Site retrieveSiteData(int i) {
        Site site = new Site();
        List<Floor> floors = new ArrayList<>();
        Floor floor = new Floor();
        floor.setName("Level3");
        floor.setTotalSeat("20");
        floors.add(floor);
        site.setFloors(floors);
        return site;
    }

    public CompanyData retrieveCompanyData() {
        List<Site> mSites = new ArrayList<>();
        mSites.add(retrieveSiteData(1));
        return new CompanyData("Gurgaon", "Ggn Industries", "DLF Cybercity", mSites);
    }
}
