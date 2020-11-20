package github.opendesk.bookingservice.service;

import github.opendesk.bookingservice.dao.BookingDao;
import github.opendesk.bookingservice.model.Booking;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import github.opendesk.bookingservice.repository.BookingRepository;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class TestBookingServiceImpl {

    @Mock
    private BookingRepository bookingRepository;
    @InjectMocks
    private BookingServiceImpl bookingService;

    @Test
    public void testGetBookings() {

        //Given
        List bookingDoaList = new ArrayList();
        LocalDate firstBookingDate = LocalDate.now();
        LocalTime firstBookingTime = LocalTime.now();
        String firstBookingId = "firstBookingId";
        String firstFloorId = "firstFloorId";
        String firstOrgId = "firstOrgId";
        String firstUserId = "firstUserId";
        String firstSiteId = "firstSiteId";

        BookingDao bookingDaoFirst = BookingDao.builder().
                bookingDate(firstBookingDate.toString())
                .bookingTime(firstBookingTime.toString())
                .bookingId(firstBookingId)
                .orgId(firstOrgId)
                .userId(firstUserId)
                .siteId(firstSiteId)
                .floorId(firstFloorId).build();

        LocalDate secondBookingDate = LocalDate.now();
        LocalTime secondBookingTime = LocalTime.now();
        String secondBookingId = "secondBookingId";
        String secondFloorId = "secondFloorId";
        String secondOrgId = "secondOrgId";
        String secondUserId = "secondUserId";
        String secondSiteId = "secondSiteId";
        BookingDao bookingDaoSecond = BookingDao.builder().
                bookingDate(secondBookingDate.toString())
                .bookingTime(secondBookingTime.toString())
                .bookingId(secondBookingId)
                .orgId(secondOrgId)
                .userId(secondUserId)
                .siteId(secondSiteId)
                .floorId(secondFloorId).build();
        bookingDoaList.add(bookingDaoFirst);
        bookingDoaList.add(bookingDaoSecond);


        //when
        Mockito.when(bookingRepository.findAll()).thenReturn(bookingDoaList);

        //then
        Assertions.assertEquals(bookingService.getBookings().size(), bookingDoaList.size());
        Assertions.assertEquals(bookingService.getBookings().get(0).getBookingDate(), firstBookingDate.toString());
        Assertions.assertEquals(bookingService.getBookings().get(0).getFloorId(), firstFloorId);
        Assertions.assertEquals(bookingService.getBookings().get(0).getSiteId(), firstSiteId);
        Assertions.assertEquals(bookingService.getBookings().get(0).getUserId(), firstUserId);
        Assertions.assertEquals(bookingService.getBookings().get(0).getOrgId(), firstOrgId);
        Assertions.assertEquals(bookingService.getBookings().get(1).getFloorId(), secondFloorId);
        Assertions.assertEquals(bookingService.getBookings().get(1).getSiteId(), secondSiteId);
        Assertions.assertEquals(bookingService.getBookings().get(1).getUserId(), secondUserId);
        Assertions.assertEquals(bookingService.getBookings().get(1).getOrgId(), secondOrgId);

    }

    @Test
    public void testGetBookingsForEmployee() {

        //Given
        List bookingDoaList = new ArrayList();
        bookingDoaList.add(BookingDao.builder().
                bookingDate(LocalDate.now().toString())
                .bookingTime(LocalDate.now().toString())
                .bookingId("2")
                .orgId("2")
                .userId("2")
                .siteId("2")
                .floorId("2").build());
        bookingDoaList.add(BookingDao.builder().
                bookingDate(LocalDate.now().toString())
                .bookingTime(LocalDate.now().toString())
                .bookingId("3")
                .orgId("3")
                .userId("3")
                .siteId("3")
                .floorId("3").build());
        //when
        Mockito.when(bookingRepository.findByUserId("2")).thenReturn(bookingDoaList);

        List<Booking> bookingsForAnEmployee = bookingService.getBookingsForAnEmployee("2");

        //then
        Assertions.assertEquals(bookingsForAnEmployee.size(), bookingDoaList.size());
        Assertions.assertEquals(bookingsForAnEmployee.get(0).getFloorId(), "2");
        Assertions.assertEquals(bookingsForAnEmployee.get(0).getSiteId(), "2");
        Assertions.assertEquals(bookingsForAnEmployee.get(0).getUserId(), "2");
        Assertions.assertEquals(bookingsForAnEmployee.get(0).getOrgId(), "2");
        Assertions.assertEquals(bookingsForAnEmployee.get(1).getFloorId(), "3");
        Assertions.assertEquals(bookingsForAnEmployee.get(1).getSiteId(), "3");
        Assertions.assertEquals(bookingsForAnEmployee.get(1).getUserId(), "3");
        Assertions.assertEquals(bookingsForAnEmployee.get(1).getOrgId(), "3");
    }

}
