package github.opendesk.bookingservice.converter;

import github.opendesk.bookingservice.dao.BookingDao;
import github.opendesk.bookingservice.model.Booking;
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
        Booking booking = Booking.builder().
                bookingDate(bookingDate.toString())
                .bookingTime(bookingTime.toString())
                .bookingId(bookingId)
                .orgId(orgId)
                .userId(userId)
                .siteId(siteId)
                .floorId(floorId).build();

        //When
        BookingDao bookingDao = BookingConverter.bookingModelToBookingDao.apply(booking);

        //Then
        Assertions.assertEquals(bookingDao.getBookingDate(), booking.getBookingDate());
        Assertions.assertEquals(bookingDao.getBookingId(), booking.getBookingId());
        Assertions.assertEquals(bookingDao.getBookingTime(), booking.getBookingTime());
        Assertions.assertEquals(bookingDao.getFloorId(), booking.getFloorId());
        Assertions.assertEquals(bookingDao.getSiteId(), booking.getSiteId());
        Assertions.assertEquals(bookingDao.getOrgId(), booking.getOrgId());
        Assertions.assertEquals(bookingDao.getUserId(), booking.getUserId());

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
        Booking booking = BookingConverter.bookingDaoToBookingModel.apply(bookingDao);

        //Then
        Assertions.assertEquals(booking.getBookingDate(), bookingDao.getBookingDate());
        Assertions.assertEquals(booking.getBookingId(), bookingDao.getBookingId());
        Assertions.assertEquals(booking.getBookingTime(), bookingDao.getBookingTime());
        Assertions.assertEquals(booking.getFloorId(), bookingDao.getFloorId());
        Assertions.assertEquals(booking.getSiteId(), bookingDao.getSiteId());
        Assertions.assertEquals(booking.getOrgId(), bookingDao.getOrgId());
        Assertions.assertEquals(booking.getUserId(), bookingDao.getUserId());

    }

}
