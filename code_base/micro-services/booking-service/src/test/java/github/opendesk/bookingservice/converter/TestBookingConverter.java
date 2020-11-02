package github.opendesk.bookingservice.converter;

import github.opendesk.bookingservice.dao.BookingDao;
import github.opendesk.bookingservice.model.BookingModel;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;
import java.time.LocalTime;

@ExtendWith(SpringExtension.class)
@SpringBootTest

public class TestBookingConverter {

    @Test
    public void testBookingModelToDaoConverter(){
        //Given
        LocalDate bookingDate = LocalDate.now();
        LocalTime bookingTime = LocalTime.now();
        String bookingId = "firstBookingId";
        String floorId = "firstFloorId";
        String orgId = "firstOrgId";
        String userId = "firstUserId";
        String siteId = "firstSiteId";
        BookingModel bookingModel = BookingModel.builder().
                bookingDate(bookingDate.toString())
                .bookingTime(bookingTime.toString())
                .bookingId(bookingId)
                .orgId(orgId)
                .userId(userId)
                .siteId(siteId)
                .floorId(floorId).build();

        //When
        BookingDao bookingDao = BookingConverter.bookingModelToBookingDao.apply(bookingModel);

        //Then
        Assertions.assertEquals(bookingDao.getBookingDate(), bookingModel.getBookingDate());
        Assertions.assertEquals(bookingDao.getBookingId(), bookingModel.getBookingId());
        Assertions.assertEquals(bookingDao.getBookingTime(), bookingModel.getBookingTime());
        Assertions.assertEquals(bookingDao.getFloorId(), bookingModel.getFloorId());
        Assertions.assertEquals(bookingDao.getSiteId(), bookingModel.getSiteId());
        Assertions.assertEquals(bookingDao.getOrgId(), bookingModel.getOrgId());
        Assertions.assertEquals(bookingDao.getUserId(), bookingModel.getUserId());

    }

    @Test
    public void testBookingDoaToModelConverter(){
        //Given
        LocalDate bookingDate = LocalDate.now();
        LocalTime bookingTime = LocalTime.now();
        String bookingId = "firstBookingId";
        String floorId = "firstFloorId";
        String orgId = "firstOrgId";
        String userId = "firstUserId";
        String siteId = "firstSiteId";
        BookingDao bookingDao = BookingDao.builder().
                bookingDate(bookingDate.toString())
                .bookingTime(bookingTime.toString())
                .bookingId(bookingId)
                .orgId(orgId)
                .userId(userId)
                .siteId(siteId)
                .floorId(floorId).build();

        //When
        BookingModel bookingModel = BookingConverter.bookingDaoToBookingModel.apply(bookingDao);

        //Then
        Assertions.assertEquals(bookingModel.getBookingDate(), bookingDao.getBookingDate());
        Assertions.assertEquals(bookingModel.getBookingId(), bookingDao.getBookingId());
        Assertions.assertEquals(bookingModel.getBookingTime(), bookingDao.getBookingTime());
        Assertions.assertEquals(bookingModel.getFloorId(), bookingDao.getFloorId());
        Assertions.assertEquals(bookingModel.getSiteId(), bookingDao.getSiteId());
        Assertions.assertEquals(bookingModel.getOrgId(), bookingDao.getOrgId());
        Assertions.assertEquals(bookingModel.getUserId(), bookingDao.getUserId());

    }

}
